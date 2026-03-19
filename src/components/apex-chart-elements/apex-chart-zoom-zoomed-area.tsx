import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-zoom-zoomed-area","shadow":true})
export class ApexChartZoomZoomedArea {
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
        const fillChildren: Array<HTMLApexChartZoomZoomedAreaFillElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-zoom-zoomed-area-fill') ?? []) as Array<HTMLApexChartZoomZoomedAreaFillElement>
        this.fill = await fillChildren.at(0)?.getData()
        const strokeChildren: Array<HTMLApexChartZoomZoomedAreaStrokeElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-zoom-zoomed-area-stroke') ?? []) as Array<HTMLApexChartZoomZoomedAreaStrokeElement>
        this.stroke = await strokeChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>> {
        return {
        	fill: this.fill,
        	stroke: this.stroke,
        }
    }

    @Prop()
    fill?: { color?: string | undefined; opacity?: number | undefined; };
    @Prop()
    stroke?: { color?: string | undefined; opacity?: number | undefined; width?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
