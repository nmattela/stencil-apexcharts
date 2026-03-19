import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radar-polygons-fill","shadow":true})
export class ApexPlotOptionsRadarPolygonsFill {
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
        const colorsChildren: Array<HTMLApexPlotOptionsRadarPolygonsFillColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-fill-colors-list') ?? []) as Array<HTMLApexPlotOptionsRadarPolygonsFillColorsListElement>
        this.colors = await colorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>> {
        return {
        	colors: this.colors,
        }
    }

    @Prop()
    colors?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
