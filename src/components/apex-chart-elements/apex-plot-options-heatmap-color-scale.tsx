import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-heatmap-color-scale","shadow":true})
export class ApexPlotOptionsHeatmapColorScale {
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
        const rangesChildren: Array<HTMLApexPlotOptionsHeatmapColorScaleRangesListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-heatmap-color-scale-ranges-list') ?? []) as Array<HTMLApexPlotOptionsHeatmapColorScaleRangesListElement>
        this.ranges = await rangesChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>> {
        return {
        	inverse: this.inverse,
        	min: this.min,
        	max: this.max,
        	ranges: this.ranges,
        }
    }

    @Prop()
    inverse?: boolean;
    @Prop()
    min?: number;
    @Prop()
    max?: number;
    @Prop()
    ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; foreColor?: string | undefined; name?: string | undefined; }[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
