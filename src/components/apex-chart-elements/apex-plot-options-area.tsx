import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-area","shadow":true})
export class ApexPlotOptionsArea {
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
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['area'], undefined>> {
        return {
        	fillTo: this.fillTo,
        }
    }

    @Prop()
    fillTo?: "origin" | "end";

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
