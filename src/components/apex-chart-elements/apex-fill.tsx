import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-fill","shadow":true})
export class ApexFill {
    @Element()
    element!: HTMLElement;
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    async updateChildren() {
        const colorsChildren: Array<HTMLApexFillColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-colors-list') ?? []) as Array<HTMLApexFillColorsListElement>
        this.colors = await colorsChildren.at(0)?.getData()
        const opacityChildren: Array<HTMLApexFillOpacityListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-opacity-list') ?? []) as Array<HTMLApexFillOpacityListElement>
        this.opacity = await opacityChildren.at(0)?.getData()
        const typeChildren: Array<HTMLApexFillTypeListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-type-list') ?? []) as Array<HTMLApexFillTypeListElement>
        this.type = await typeChildren.at(0)?.getData()
        const gradientChildren: Array<HTMLApexFillGradientElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient') ?? []) as Array<HTMLApexFillGradientElement>
        this.gradient = await gradientChildren.at(0)?.getData()
        const imageChildren: Array<HTMLApexFillImageElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-image') ?? []) as Array<HTMLApexFillImageElement>
        this.image = await imageChildren.at(0)?.getData()
        const patternChildren: Array<HTMLApexFillPatternElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-pattern') ?? []) as Array<HTMLApexFillPatternElement>
        this.pattern = await patternChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexFill> {
        return {
        	colors: this.colors,
        	opacity: this.opacity,
        	type: this.type,
        	gradient: this.gradient,
        	image: this.image,
        	pattern: this.pattern,
        }
    }

    @Prop()
    colors?: any[];
    @Prop()
    opacity?: number | number[];
    @Prop()
    type?: string | string[];
    @Prop()
    gradient?: { shade?: string | undefined; type?: string | undefined; shadeIntensity?: number | undefined; gradientToColors?: string[] | undefined; inverseColors?: boolean | undefined; opacityFrom?: number | number[] | undefined; opacityTo?: number | number[] | undefined; stops?: number[] | undefined; colorStops?: ApexColorStop[] | ApexColorStop[][] | undefined; };
    @Prop()
    image?: { src?: string | string[] | undefined; width?: number | undefined; height?: number | undefined; };
    @Prop()
    pattern?: { style?: string | string[] | undefined; width?: number | undefined; height?: number | undefined; strokeWidth?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
