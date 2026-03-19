import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-y-axis-tooltip","shadow":true})
export class ApexYAxisTooltip {
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
    async getData(): Promise<Exclude<globalThis.ApexYAxis['tooltip'], undefined>> {
        return {
        	enabled: this.enabled,
        	offsetX: this.offsetX,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    offsetX?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
