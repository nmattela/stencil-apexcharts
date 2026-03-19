import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-tooltip-x","shadow":true})
export class ApexTooltipX {
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
    async getData(): Promise<Exclude<globalThis.ApexTooltip['x'], undefined>> {
        return {
        	show: this.show,
        	format: this.format,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    format?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
