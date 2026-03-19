import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-legend-on-item-click","shadow":true})
export class ApexLegendOnItemClick {
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
    async getData(): Promise<Exclude<globalThis.ApexLegend['onItemClick'], undefined>> {
        return {
        	toggleDataSeries: this.toggleDataSeries,
        }
    }

    @Prop()
    toggleDataSeries?: boolean;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
