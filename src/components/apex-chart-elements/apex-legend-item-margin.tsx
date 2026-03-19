import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-legend-item-margin","shadow":true})
export class ApexLegendItemMargin {
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
    async getData(): Promise<Exclude<globalThis.ApexLegend['itemMargin'], undefined>> {
        return {
        	horizontal: this.horizontal,
        	vertical: this.vertical,
        }
    }

    @Prop()
    horizontal?: number;
    @Prop()
    vertical?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
