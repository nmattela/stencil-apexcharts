import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-treemap-data-labels","shadow":true})
export class ApexPlotOptionsTreemapDataLabels {
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
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['dataLabels'], undefined>> {
        return {
        	format: this.format,
        }
    }

    @Prop()
    format?: "scale" | "truncate";

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
