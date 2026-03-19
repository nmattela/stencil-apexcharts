import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-fill-gradient-gradient-to-colors-item","shadow":true})
export class ApexFillGradientGradientToColorsItem {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['gradientToColors'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
