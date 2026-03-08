import { Project, SyntaxKind, Node } from 'ts-morph';
import * as path from 'path';

const project = new Project({ tsConfigFilePath: 'tsconfig.json' });

const sourceFile = project.addSourceFileAtPath(
  path.resolve('node_modules/apexcharts/types/apexcharts.d.ts')
);

const apexCharts = sourceFile.getModuleOrThrow(`ApexCharts`)
const apexOptions = apexCharts.getInterfaceOrThrow(`ApexOptions`)
const typeAliases = sourceFile.getTypeAliases()

// const camelCaseToKebabCase = (camelCase: string): string => camelCase.split(``).reduce((segments, char) => char.toUpperCase() === char ? [...segments, char.toLowerCase()] : [...segments.slice(0, -1), `${segments.at(-1)}${char}`], new Array<string>()).join(`-`)
const splitCamelCase = (camelCase: string): Array<string> => camelCase.split(``).reduce((segments, char) => char.toUpperCase() === char || segments.length === 0 ? [...segments, char.toLowerCase()] : [...segments.slice(0, -1), `${segments.at(-1)}${char}`], new Array<string>())

const toPascalCase = (sections: Array<string>): string => sections.map(s => `${s.at(0)?.toUpperCase()}${s.slice(1)}`).join(``)
// const toCamelCase = (sections: Array<string>): string => [sections.at(0), sections.slice(1).map(s => `${s.at(0)?.toUpperCase()}${s.slice(1)}`)].join(``)
const toKebabCase = (sections: Array<string>): string => sections.join(`-`)

const outputFile = project.createSourceFile('src/components/apex-chart-elements/apex-chart-elements.tsx', undefined, {
  overwrite: true
});

outputFile.addImportDeclaration({
  moduleSpecifier: `apexcharts`,
  namedImports: [`ApexOptions as ApexChartsApexOptions`]
})

outputFile.addImportDeclaration({
  moduleSpecifier: `@stencil/core`,
  namedImports: [`Component`, `Method`, `Prop`, `Element`]
})

const apexChartElementClass = outputFile.addClass({
  name: `ApexChartElement`,
  isAbstract: true,
  typeParameters: [`ApexType`]
})

// apexChartElementClass.addMethod({
//   name: `getData`,
//   isAbstract: true,
//   returnType: `Promise<ApexType>`
// })

type ApexWebComponentTypePathElement = {
  name: string,
  type: 'interface' | 'typeLiteral' | 'prop' | 'array' | 'union'
}
type ApexWebComponentProperty = {
  node: Node,
  optional: boolean,
}
type ApexWebComponent = {
  name: Array<string>,
  typePath: Array<ApexWebComponentTypePathElement>,
  typeObject?: {
    attributeProperties: {[name: string]: ApexWebComponentProperty}
    childProperties: {[name: string]: ApexWebComponentProperty}
  },
  typeArray?: {
    propertyType: Node
  },
  typeSimple?: {
    propertyType: Node
  },
}

type GenerateApexChartElementOpts = {
  prefix: Array<string>,
  typePath: Array<ApexWebComponentTypePathElement>,
  parent?: `union` | `array`
}
function generateApexChartElement(node: Node, { prefix, typePath, parent }: GenerateApexChartElementOpts): Array<ApexWebComponent> {
  switch(node.getKind()) {
    case SyntaxKind.InterfaceDeclaration: {
      const interfaceDeclaration = node.asKindOrThrow(SyntaxKind.InterfaceDeclaration)
      const properties = interfaceDeclaration.getProperties()
      const newPrefix = [...prefix, ...splitCamelCase(interfaceDeclaration.getName())]
      const children = Object.fromEntries(properties.flatMap(prop => {
        const typeNode = prop.getTypeNode()
        if(typeNode === undefined) {
          return []
        }
        const chartElements = generateApexChartElement(typeNode, {
          prefix: [...newPrefix, ...splitCamelCase(prop.getName())],
          typePath: [...typePath, { name: prop.getName(), type: `prop` }]
        })
        if(chartElements.length === 0) {
          return []
        } else {
          return [[
            prop.getName(),
            chartElements,
          ]]
        }
      }))
      return [
        {
          name: [...prefix, ...splitCamelCase(interfaceDeclaration.getName())],
          typePath: typePath,
          typeObject: {
            attributeProperties: Object.fromEntries(properties.flatMap(prop => {
              if(prop.getTypeNode()?.getKind() === SyntaxKind.TypeReference) {
                return []
              }
              const isChildProp = Object.hasOwn(children, prop.getName())
              if(isChildProp) {
                return []
              }
              const typeNode = prop.getTypeNode()
              if(typeNode === undefined) {
                return []
              }
              return [[prop.getName(), { node: typeNode, optional: prop.hasQuestionToken() }]]
            })),
            childProperties: Object.fromEntries(properties.flatMap(prop => {
              const typeNode = prop.getTypeNode()
              if(typeNode === undefined) {
                return []
              }
              if(prop.getTypeNode()?.getKind() === SyntaxKind.TypeReference) {
                return [[prop.getName(), { node: typeNode, optional: prop.hasQuestionToken() }]]
              }
              const isChildProp = Object.hasOwn(children, prop.getName())
              if(!isChildProp) {
                return []
              }
              return [[prop.getName(), { node: typeNode, optional: prop.hasQuestionToken() }]]
            })),
          }
        },
        ...Object.values(children).flat()
      ]
    }
    case SyntaxKind.TypeAliasDeclaration: {
      const typeAlias = node.asKindOrThrow(SyntaxKind.TypeAliasDeclaration)
      const typeNode = typeAlias.getTypeNode()
      if(typeNode !== undefined) {
        return generateApexChartElement(typeNode, {
          prefix: [...prefix, ...splitCamelCase(typeAlias.getName())],
          typePath: [...typePath, { name: typeAlias.getName(), type: `typeLiteral` }]
        })
      } else {
        return []
      }
    }
    case SyntaxKind.TypeLiteral: {
      const typeLiteral = node.asKindOrThrow(SyntaxKind.TypeLiteral)
      const properties = typeLiteral.getProperties()
      const childProps = Object.fromEntries(properties.flatMap(prop => {
        const typeNode = prop.getTypeNode()
        if(typeNode === undefined) {
          return []
        }
        const chartElements = generateApexChartElement(typeNode, {
          prefix: [...prefix, ...splitCamelCase(prop.getName())],
          typePath: [...typePath, { name: prop.getName(), type: `prop` }]
        })
        if(chartElements.length === 0) {
          return []
        } else {
          return [[
            prop.getName(),
            chartElements,
          ]]
        }
      }))
      return [
        {
          name: prefix,
          typePath: typePath,
          typeObject: {
            attributeProperties: Object.fromEntries(properties.flatMap(prop => {
              if(prop.getTypeNode()?.getKind() === SyntaxKind.TypeReference) {
                return []
              }
              const isChildProp = Object.hasOwn(childProps, prop.getName())
              if(isChildProp) {
                return []
              }
              const typeNode = prop.getTypeNode()
              if(typeNode === undefined) {
                return []
              }
              return [[prop.getName(), { node: typeNode, optional: prop.hasQuestionToken() }]]
            })),
            childProperties: Object.fromEntries(properties.flatMap(prop => {
              const typeNode = prop.getTypeNode()
              if(typeNode === undefined) {
                return []
              }
              if(prop.getTypeNode()?.getKind() === SyntaxKind.TypeReference) {
                return [[prop.getName(), { node: typeNode, optional: prop.hasQuestionToken() }]]
              }
              const isChildProp = Object.hasOwn(childProps, prop.getName())
              if(!isChildProp) {
                return []
              }
              return [[prop.getName(), { node: typeNode, optional: prop.hasQuestionToken() }]]
            })),
          }
        },
        ...Object.values(childProps).flat()
      ]
    }
    case SyntaxKind.ArrayType: {
      const arrayType = node.asKindOrThrow(SyntaxKind.ArrayType)
      const children = generateApexChartElement(arrayType.getElementTypeNode(), {
        prefix: [...prefix, `item`],
        typePath: [...typePath, { name: `item`, type: `array` }],
        parent: `array`
      })
      return [
        {
          name: [...prefix, `list`],
          typePath: typePath,
          typeArray: {
            propertyType: arrayType.getElementTypeNode()
          },
        },
        ...children
      ]
    }
    case SyntaxKind.IntersectionType: {
      const intersectionType = node.asKindOrThrow(SyntaxKind.IntersectionType)
      return intersectionType.getChildren().flatMap(child => generateApexChartElement(child, { prefix, typePath }))
    }
    case SyntaxKind.UnionType: {
      const unionType = node.asKindOrThrow(SyntaxKind.UnionType)
      return unionType.getChildren().flatMap(child => generateApexChartElement(child, { prefix, typePath, parent: `union` }))
    }
    case SyntaxKind.SyntaxList: {
      const syntaxList = node.asKindOrThrow(SyntaxKind.SyntaxList)
      const children = syntaxList.getChildren().filter(child => ![SyntaxKind.BarToken, SyntaxKind.AmpersandToken].includes(child.getKind()))
      // Filter out the children that will return something, so we know whether we need to distinct them by their index
      const uniqueChildren = children.filter(child => {
        const generated = generateApexChartElement(child, { prefix, typePath })
        return generated.length > 0
      })
      if(uniqueChildren.length === 1) {
        return uniqueChildren.flatMap((child) => generateApexChartElement(child, {
          prefix,
          typePath: [...typePath, ...((parent === `union` ? [{ type: `union`, name: child.getText() }] : []) as Array<ApexWebComponentTypePathElement>)]
        }))
      } else {
        return children.flatMap((child, i) => generateApexChartElement(child, {
          prefix: [...prefix, (i+1).toString()],
          typePath: [...typePath, ...((parent === `union` ? [{ type: `union`, name: child.getText() }] : []) as Array<ApexWebComponentTypePathElement>)],
        }))
      }
    }
    case SyntaxKind.StringKeyword:
    case SyntaxKind.NumberKeyword:
    case SyntaxKind.AnyKeyword:
    case SyntaxKind.BooleanKeyword: {
      if(parent !== `array`) {
        return []
      }
      return [{
        name: prefix,
        typePath: typePath,
        typeSimple: {
          propertyType: node,
        },
      }]
    }
    default: {
      // console.log(`Unhandled: `, node.getKindName(), node.getText())
      return []
    }
  }
}

// function getTypePaths(node: Node, typePath: Array<ApexWebComponentTypePathElement>): Array<[string, Array<ApexWebComponentTypePathElement>]> {
//   switch(node.getKind()) {
//     case SyntaxKind.InterfaceDeclaration: {
//       const interfaceDeclaration = node.asKindOrThrow(SyntaxKind.InterfaceDeclaration)
//       const properties = interfaceDeclaration.getProperties()
//       const interfaceName = interfaceDeclaration.getName()
//       const typeName = interfaceName === `ApexOptions` ? `ApexChartsApexOptions` : interfaceName
//       const newTypePath = [...typePath, { name: typeName, type: `interface` }] as Array<ApexWebComponentTypePathElement>
//       return properties.flatMap(prop => {
//         const typeNode = prop.getTypeNode()
//         if(typeNode === undefined) {
//           return []
//         } else {
//           return getTypePaths(typeNode, [...newTypePath, { name: prop.getName(), type: `prop` }])
//         }
//       })
//     }
//     case SyntaxKind.TypeReference: {
//       const typeReference = node.asKindOrThrow(SyntaxKind.TypeReference)
//       const typeAlias = typeAliases.find(typeAlias => typeAlias.getName() === typeReference.getText())
//       if(typeAlias === undefined) {
//         return []
//       }
//       return [[typeReference.getText(), typePath], ...getTypePaths(typeAlias, typePath)]
//     }
//     case SyntaxKind.TypeAliasDeclaration: {
//       const typeAlias = node.asKindOrThrow(SyntaxKind.TypeAliasDeclaration)
//       const typeNode = typeAlias.getTypeNode()
//       if(typeNode === undefined) {
//         return []
//       }
//       return getTypePaths(typeNode, typePath)
//     }
//     case SyntaxKind.TypeLiteral: {
//       const typeLiteral = node.asKindOrThrow(SyntaxKind.TypeLiteral)
//       const properties = typeLiteral.getProperties()
//       return properties.flatMap(prop => {
//         const typeNode = prop.getTypeNode()
//         if(typeNode === undefined) {
//           return []
//         } else {
//           return getTypePaths(typeNode, [...typePath, { name: prop.getName(), type: `prop` }])
//         }
//       })
//     }
//     case SyntaxKind.ArrayType: {
//       const arrayType = node.asKindOrThrow(SyntaxKind.ArrayType)
//       return getTypePaths(arrayType.getElementTypeNode(), [...typePath, { name: `item`, type: `array` }])
//     }
//     case SyntaxKind.UnionType: {
//       const unionType = node.asKindOrThrow(SyntaxKind.UnionType)
//       // return unionType.getChildren().flatMap(child => getTypePaths(child, [...typePath, { type: `union`, name: child.getText() }]))
//       const syntaxList = unionType.getChildSyntaxList()
//       if(syntaxList === undefined) {
//         return []
//       }
//       const children = syntaxList.getChildren().filter(child => ![SyntaxKind.BarToken, SyntaxKind.AmpersandToken].includes(child.getKind()))
//       return children.flatMap(child => getTypePaths(child, [...typePath, { type: `union`, name: child.getText() }]))
//     }
//     case SyntaxKind.SyntaxList: {
//       const syntaxList = node.asKindOrThrow(SyntaxKind.SyntaxList)
//       const children = syntaxList.getChildren().filter(child => ![SyntaxKind.BarToken, SyntaxKind.AmpersandToken].includes(child.getKind()))
//       return children.flatMap(child => getTypePaths(child, typePath))
//     }
//     default: {
//       console.log(`Unhandled: `, node.getKindName(), node.getText())
//       return []
//     }
//   }
// }

// const typePaths = Object.fromEntries(getTypePaths(apexOptions, []))
const apexWebComponents = [apexOptions, ...typeAliases].flatMap(typeAlias => generateApexChartElement(typeAlias, {
  prefix: [],
  typePath: [{ type: `interface`, name: `ApexChartsApexOptions` }]
}))

// console.log(`typePaths: `, Object.keys(typePaths))

const typePathToType = (typePath: Array<ApexWebComponentTypePathElement>): string => typePath.reduce((type, ele) => {
  switch(ele.type) {
    case "interface": {
      return ele.name
    }
    case "typeLiteral": {
      return `globalThis.${ele.name}`
      // const typeLiteral = typePaths[ele.name]
      // if(typeLiteral === undefined){
      //   // console.log(`typeLiteral ${ele.name} not found`)
      //   return ele.type
      // }
      // return typePathToType(typeLiteral)
    }
    case "prop": {
      return `Exclude<${type}['${ele.name}'], undefined>`
    }
    case "array": {
      return `${type}[0]`
    }
    case "union": {
      return `Extract<${type}, ${ele.name}>`
    }
  }
}, ``)

function defaultValue(node: Node): string {
  console.log(`checking default value for node: `, node.getKindName(), node.getType().getText())
  switch(node.getKind()) {
    case SyntaxKind.StringKeyword: return `''`
    case SyntaxKind.NumberKeyword: return `0`
    case SyntaxKind.BooleanKeyword: return `false`
    case SyntaxKind.ArrayType: return `[]`
    case SyntaxKind.ObjectKeyword: return `{}`
    case SyntaxKind.NullKeyword: return `null`
    case SyntaxKind.AnyKeyword: return `null`
    default: return `undefined`
  }
}

apexWebComponents.forEach(webComponent => {

  const apexType = typePathToType(webComponent.typePath)

  // console.log(`WebComponent ${toPascalCase(webComponent.name)}: `, webComponent.typePath, ` ${apexType}, ${apexChartElementClass.getName()}<${apexType}>`)

  const cls = outputFile.addClass({
    name: toPascalCase(webComponent.name),
    extends: `${apexChartElementClass.getName()}<${apexType}>`,
  })
  cls.addDecorator({
    name: `Component`,
    arguments: [JSON.stringify({
      tag: toKebabCase(webComponent.name),
      shadow: true
    })]
  })
  const elementReference = cls.addProperty({
    name: `element`,
    type: `HTMLElement`,
    hasExclamationToken: true,
  })
  elementReference.addDecorator({
    name: `Element`,
    arguments: [],
  })
  const getDataMethod = cls.addMethod({
    name: `getData`,
    isAsync: true,
    returnType: `Promise<${apexType}>`,
  })
  getDataMethod.addDecorator({
    name: `Method`,
    arguments: []
  })
  if(webComponent.typeObject !== undefined) {
    Object.entries(webComponent.typeObject.attributeProperties).map(([name, { node, optional }]) => {
      const property = cls.addProperty({
        name: name,
        type: node.getType().getText(),
        hasQuestionToken: optional,
        initializer: !optional ? defaultValue(node) : undefined
      })
      property.addDecorator({
        name: `Prop`,
        arguments: [],
      })
    })
    getDataMethod.setBodyText(writer => {
      writer.writeLine(`return {`)
      Object.entries(webComponent.typeObject!.attributeProperties).map(([name, { node, optional }]) => {
        writer.writeLine(`\t${name}: this.${name},`)
      })
      writer.writeLine(`}`)
    })
  } else if(webComponent.typeArray !== undefined) {
    getDataMethod.setBodyText(writer => {
      writer.writeLine(`const children = [...this.element.querySelectorAll('TODO')]`)
      writer.writeLine(`return []`)
    })
  } else if(webComponent.typeSimple !== undefined) {
    getDataMethod.setBodyText(writer => {
      switch(webComponent.typeSimple!.propertyType.getKind()) {
        case SyntaxKind.StringKeyword: {
          writer.writeLine(`return this.element.innerText`)
          break
        }
        case SyntaxKind.NumberKeyword: {
          writer.writeLine(`return parseFloat(this.element.innerText)`)
          break
        }
        case SyntaxKind.BooleanKeyword: {
          writer.writeLine(`return this.element.innerText === 'true'`)
          break
        }
        case SyntaxKind.AnyKeyword: {
          writer.writeLine(`return this.element.innerText as any`)
          break
        }
      }
    })
  }
  
})

// type GenerateApexChartElementOpts = {
//   // The prefix for the name of the element
//   prefix: string,
//   // The type of the parent object
//   parentType?: string,
// }
// function generateApexChartElement(node: Node, { prefix, parentType }: GenerateApexChartElementOpts): Array<Node> {
//   switch(node.getKind()) {
//     case SyntaxKind.TypeReference: {
//       const typeReference = node.asKindOrThrow(SyntaxKind.TypeReference)
//       // console.log(typeReference.getType().getSymbol()?.getDeclarations().map(e => e.getKindName()))
//       return typeReference.getType().getSymbol()?.getDeclarations().flatMap(e => generateApexChartElement(e, { prefix, parentType })) ?? []
//     }
//     case SyntaxKind.PropertySignature: {
//       const prop = node.asKindOrThrow(SyntaxKind.PropertySignature)
//       const newPrefix = `${prefix}${prop.getName().at(0)?.toUpperCase()}${prop.getName().slice(1)}`

//       const typeNode = prop.getTypeNode()
//       if(typeNode !== undefined) {
//         // console.log(prop.getType().getText(), `: `)
//         generateApexChartElement(typeNode, { prefix: newPrefix, parentType })
//         // console.log(`classes: `, classes)
//       }

//       const apexType = `Exclude<${parentType}['${prop.getName()}'], undefined>`

//       const cls = outputFile.addClass({
//         name: newPrefix,
//         extends: `${apexChartElementClass.getName()}<${apexType}>`,
//       })
//       cls.addDecorator({
//         name: `Component`,
//         arguments: [JSON.stringify({
//           tag: camelCaseToKebabCase(newPrefix),
//           shadow: true
//         })]
//       })
//       const getDataMethod = cls.addMethod({
//         name: `getData`,
//         isAsync: true,
//         returnType: `Promise<${apexType}>`
//       })
//       getDataMethod.addDecorator({
//         name: `Method`,
//         arguments: []
//       })

//       return [cls]
//     }
//     case SyntaxKind.TypeLiteral: {
//       const typeLiteral = node.asKindOrThrow(SyntaxKind.TypeLiteral)
//       const newPrefix = prefix
//       const properties = typeLiteral.getProperties() ?? []
//       // console.log(typeLiteral.getType().getText(), newPrefix, properties.map(p => [p.getName(), p.getType().getText()]))
//       const classes = properties.flatMap(prop => generateApexChartElement(prop, { prefix: newPrefix, parentType }))
//       return classes
//     }
//     case SyntaxKind.InterfaceDeclaration: {
//       const intface = node.asKindOrThrow(SyntaxKind.InterfaceDeclaration)
//       const newPrefix = `${prefix}${intface.getName().at(0)?.toUpperCase()}${intface.getName().slice(1)}`
//       const properties = intface.getProperties() ?? []
//       const classes = properties.flatMap(prop => generateApexChartElement(prop, { prefix: newPrefix, parentType: intface.getName() }))

//       const cls = outputFile.addClass({
//         name: newPrefix,
//         extends: `${apexChartElementClass.getName()}<${intface.getName()}>`
//       })
//       cls.addDecorator({
//         name: `Component`,
//         arguments: [JSON.stringify({
//           tag: camelCaseToKebabCase(newPrefix),
//           shadow: true
//         })]
//       })
//       const getDataMethod = cls.addMethod({
//         name: `getData`,
//         isAsync: true,
//         returnType: `Promise<${intface.getName()}>`,
//       })
//       getDataMethod.addDecorator({
//         name: `Method`,
//         arguments: []
//       })

//       properties.map((prop) => {
//         // const propClass = classes[i]
//         const classProp = cls.addProperty({
//           name: prop.getName(),
//           type: prop.getType().getText(),
//         })
//         classProp.addDecorator({
//           name: `Prop`,
//           arguments: [],
//         })
//         return classProp
//       })


//       return classes
//     }
//     default: return []
//   }
// }

// generateApexChartElement(apexOptions, { prefix: `ApexCharts` })

outputFile.saveSync();