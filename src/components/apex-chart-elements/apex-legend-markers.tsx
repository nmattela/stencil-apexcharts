import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-legend-markers","shadow":true})
export class ApexLegendMarkers {
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
        const fillColorsChildren: Array<HTMLApexLegendMarkersFillColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-markers-fill-colors-list') ?? []) as Array<HTMLApexLegendMarkersFillColorsListElement>
        this.fillColors = await fillColorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['markers'], undefined>> {
        return {
        	size: this.size,
        	strokeWidth: this.strokeWidth,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	fillColors: this.fillColors,
        	shape: this.shape,
        }
    }

    @Prop()
    size?: number;
    @Prop()
    strokeWidth?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    fillColors?: string[];
    @Prop()
    shape?: ApexMarkerShape;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
