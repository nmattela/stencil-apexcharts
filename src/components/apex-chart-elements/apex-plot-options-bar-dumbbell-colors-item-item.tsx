import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-bar-dumbbell-colors-item-item","shadow":true})
export class ApexPlotOptionsBarDumbbellColorsItemItem {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>[0][0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
