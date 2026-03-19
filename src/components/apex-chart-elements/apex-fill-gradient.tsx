import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-fill-gradient","shadow":true})
export class ApexFillGradient {
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
        const gradientToColorsChildren: Array<HTMLApexFillGradientGradientToColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-gradient-to-colors-list') ?? []) as Array<HTMLApexFillGradientGradientToColorsListElement>
        this.gradientToColors = await gradientToColorsChildren.at(0)?.getData()
        const opacityFromChildren: Array<HTMLApexFillGradientOpacityFromListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-opacity-from-list') ?? []) as Array<HTMLApexFillGradientOpacityFromListElement>
        this.opacityFrom = await opacityFromChildren.at(0)?.getData()
        const opacityToChildren: Array<HTMLApexFillGradientOpacityToListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-opacity-to-list') ?? []) as Array<HTMLApexFillGradientOpacityToListElement>
        this.opacityTo = await opacityToChildren.at(0)?.getData()
        const stopsChildren: Array<HTMLApexFillGradientStopsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-stops-list') ?? []) as Array<HTMLApexFillGradientStopsListElement>
        this.stops = await stopsChildren.at(0)?.getData()
        const colorStopsChildren: Array<HTMLApexFillGradientColorStops1ListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-color-stops-1-list') ?? []) as Array<HTMLApexFillGradientColorStops1ListElement>
        this.colorStops = await colorStopsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['gradient'], undefined>> {
        return {
        	shade: this.shade,
        	type: this.type,
        	shadeIntensity: this.shadeIntensity,
        	inverseColors: this.inverseColors,
        	gradientToColors: this.gradientToColors,
        	opacityFrom: this.opacityFrom,
        	opacityTo: this.opacityTo,
        	stops: this.stops,
        	colorStops: this.colorStops,
        }
    }

    @Prop()
    shade?: string;
    @Prop()
    type?: string;
    @Prop()
    shadeIntensity?: number;
    @Prop()
    inverseColors?: boolean;
    @Prop()
    gradientToColors?: string[];
    @Prop()
    opacityFrom?: number | number[];
    @Prop()
    opacityTo?: number | number[];
    @Prop()
    stops?: number[];
    @Prop()
    colorStops?: ApexColorStop[] | ApexColorStop[][];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
