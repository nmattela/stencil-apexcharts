import { Project, SyntaxKind, Node } from 'ts-morph';
import * as path from 'path';

// 1. Create project
const project = new Project({ tsConfigFilePath: 'tsconfig.json' });

// 2. Load library type definitions
const sourceFile = project.addSourceFileAtPath(
  path.resolve('node_modules/apexcharts/types/apexcharts.d.ts')
);


// 3. Extract interfaces
const apexCharts = sourceFile.getModuleOrThrow(`ApexCharts`)
const apexOptions = apexCharts.getInterfaceOrThrow(`ApexOptions`)

const outputFile = project.createSourceFile('src/components/apex-chart-elements/apex-chart-elements.tsx', undefined, {
  overwrite: true
});

outputFile.addImportDeclaration({
  moduleSpecifier: `apexcharts`,
  namedImports: [`ApexOptions`]
})

outputFile.addImportDeclaration({
  moduleSpecifier: `@stencil/core`,
  namedImports: [`Component`, `Method`]
})

const apexChartElementClass = outputFile.addClass({
  name: `ApexChartElement`,
  isAbstract: true,
  typeParameters: [`ApexType`]
})

apexChartElementClass.addMethod({
  name: `getData`,
  isAbstract: true,
  returnType: `Promise<ApexType>`
})

function generateApexChartElement(node: Node, parentType?: string): Array<Node> {
  switch(node.getKind()) {
    case SyntaxKind.PropertySignature: {
      const prop = node.asKindOrThrow(SyntaxKind.PropertySignature)

      const apexType = `Exclude<${parentType}['${prop.getName()}'], undefined>`

      const cls = outputFile.addClass({
        name: `Apex${prop.getName()}`,
        extends: `${apexChartElementClass.getName()}<${apexType}>`,
      })
      cls.addDecorator({
        name: `Component`,
        arguments: [JSON.stringify({
          tag: `apex-${prop.getName()}`,
          shadow: true
        })]
      })
      const getDataMethod = cls.addMethod({
        name: `getData`,
        isAsync: true,
        returnType: `Promise<${apexType}>`
      })
      getDataMethod.addDecorator({
        name: `Method`,
        arguments: []
      })

      return [cls]
    }
    case SyntaxKind.TypeLiteral: {
      const typeLiteral = node.asKindOrThrow(SyntaxKind.TypeLiteral)
      const properties = typeLiteral.getProperties() ?? []
      const classes = properties.flatMap(prop => generateApexChartElement(prop, parentType))
      return classes
    }
    case SyntaxKind.InterfaceDeclaration: {
      const intface = node.asKindOrThrow(SyntaxKind.InterfaceDeclaration)
      const properties = intface.getProperties() ?? []
      const classes = properties.flatMap(prop => generateApexChartElement(prop, intface.getName()))
      return classes
    }
    default: return []
  }
}

generateApexChartElement(apexOptions)

// const properties = typeNode?.asKind(SyntaxKind.TypeLiteral)?.getProperties() ?? []
// const classes = properties.map(prop => {
//   const apexType = `Exclude<ApexOptions['${prop.getName()}'], undefined>`

//   const cls = outputFile.addClass({
//     name: `Apex${prop.getName()}`,
//     extends: `${apexChartElementClass.getName()}<${apexType}>`,
//   })
//   cls.addDecorator({
//     name: `Component`,
//     arguments: [JSON.stringify({
//       tag: `apex-${prop.getName()}`,
//       shadow: true
//     })]
//   })
//   const getDataMethod = cls.addMethod({
//     name: `getData`,
//     isAsync: true,
//     returnType: `Promise<${apexType}>`
//   })
//   getDataMethod.addDecorator({
//     name: `Method`,
//     arguments: []
//   })

//   return cls
// })
// return classes

// props?.forEach(prop => {

//   const apexType = `Exclude<ApexOptions['${prop.getName()}'], undefined>`

//   const internalApexType = prop.getType().getUnionTypes().filter(typ => !typ.isUndefined()).at(0)
//   if(internalApexType !== undefined) {
//     console.log(`for: `, internalApexType.getText())
//     generateApexChartElement(internalApexType)
//     // const apexTypeDefinition = sourceFile.getTypeAlias(internalApexType.getText())
//   }

//   const cls = outputFile.addClass({
//     name: `Apex${prop.getName()}`,
//     extends: `${apexChartElementClass.getName()}<${apexType}>`,
//   })
//   cls.addDecorator({
//     name: `Component`,
//     arguments: [JSON.stringify({
//       tag: `apex-${prop.getName()}`,
//       shadow: true
//     })]
//   })
//   const getDataMethod = cls.addMethod({
//     name: `getData`,
//     isAsync: true,
//     returnType: `Promise<${apexType}>`
//   })
//   getDataMethod.addDecorator({
//     name: `Method`,
//     arguments: []
//   })
// })

outputFile.saveSync();