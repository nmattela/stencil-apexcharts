import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-heatmap-color-scale-ranges-list","shadow":true})
export class ApexPlotOptionsHeatmapColorScaleRangesList {
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
        const listItems: Array<HTMLApexPlotOptionsHeatmapColorScaleRangesItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-heatmap-color-scale-ranges-item') ?? []) as Array<HTMLApexPlotOptionsHeatmapColorScaleRangesItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>['ranges'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
                from?: number
                to?: number
                color?: string
                foreColor?: string
                name?: string
              }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
