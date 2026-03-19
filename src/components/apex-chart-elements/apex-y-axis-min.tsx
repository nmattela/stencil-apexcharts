import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-y-axis-min","shadow":true})
export class ApexYAxisMin {
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
    async getData(): Promise<Extract<Exclude<globalThis.ApexYAxis['min'], undefined>, ((min: number) => number)>> {
        return new Function(this.element.innerText) as (min: number) => number
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
