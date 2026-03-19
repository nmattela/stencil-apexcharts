import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-heatmap-color-scale-ranges-item","shadow":true})
export class ApexPlotOptionsHeatmapColorScaleRangesItem {
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
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>['ranges'], undefined>[0]> {
        return {
        	from: this.from,
        	to: this.to,
        	color: this.color,
        	foreColor: this.foreColor,
        	name: this.name,
        }
    }

    @Prop()
    from?: number;
    @Prop()
    to?: number;
    @Prop()
    color?: string;
    @Prop()
    foreColor?: string;
    @Prop()
    name?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
