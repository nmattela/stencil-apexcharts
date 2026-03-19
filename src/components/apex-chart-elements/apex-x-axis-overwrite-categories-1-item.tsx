import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-overwrite-categories-1-item","shadow":true})
export class ApexXAxisOverwriteCategories1Item {
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
    async getData(): Promise<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
