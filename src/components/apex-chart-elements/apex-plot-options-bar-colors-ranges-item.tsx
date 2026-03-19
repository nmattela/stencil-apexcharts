import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-bar-colors-ranges-item","shadow":true})
export class ApexPlotOptionsBarColorsRangesItem {
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
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['ranges'], undefined>[0]> {
        return {
        	from: this.from,
        	to: this.to,
        	color: this.color,
        }
    }

    @Prop()
    from?: number;
    @Prop()
    to?: number;
    @Prop()
    color?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
