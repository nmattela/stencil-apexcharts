import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-responsive","shadow":true})
export class ApexResponsive {
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
    async getData(): Promise<globalThis.ApexResponsive> {
        return {
        	breakpoint: this.breakpoint,
        	options: this.options,
        }
    }

    @Prop()
    breakpoint?: number;
    @Prop()
    options?: any;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
