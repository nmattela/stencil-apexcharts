import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-stroke-colors-1-item","shadow":true})
export class ApexStrokeColors1Item {
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
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, any[]>[0]> {
        return this.element.innerText as any
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
