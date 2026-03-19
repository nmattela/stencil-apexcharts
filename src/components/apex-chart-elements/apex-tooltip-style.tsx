import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-tooltip-style","shadow":true})
export class ApexTooltipStyle {
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
    async getData(): Promise<Exclude<globalThis.ApexTooltip['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
