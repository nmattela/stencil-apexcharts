import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-legend-on-item-hover","shadow":true})
export class ApexLegendOnItemHover {
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
    async getData(): Promise<Exclude<globalThis.ApexLegend['onItemHover'], undefined>> {
        return {
        	highlightDataSeries: this.highlightDataSeries,
        }
    }

    @Prop()
    highlightDataSeries?: boolean;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
