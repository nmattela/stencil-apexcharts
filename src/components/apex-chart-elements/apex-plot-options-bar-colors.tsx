import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-bar-colors","shadow":true})
export class ApexPlotOptionsBarColors {
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
        const rangesChildren: Array<HTMLApexPlotOptionsBarColorsRangesListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-colors-ranges-list') ?? []) as Array<HTMLApexPlotOptionsBarColorsRangesListElement>
        this.ranges = await rangesChildren.at(0)?.getData()
        const backgroundBarColorsChildren: Array<HTMLApexPlotOptionsBarColorsBackgroundBarColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-colors-background-bar-colors-list') ?? []) as Array<HTMLApexPlotOptionsBarColorsBackgroundBarColorsListElement>
        this.backgroundBarColors = await backgroundBarColorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>> {
        return {
        	backgroundBarOpacity: this.backgroundBarOpacity,
        	backgroundBarRadius: this.backgroundBarRadius,
        	ranges: this.ranges,
        	backgroundBarColors: this.backgroundBarColors,
        }
    }

    @Prop()
    backgroundBarOpacity?: number;
    @Prop()
    backgroundBarRadius?: number;
    @Prop()
    ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; }[];
    @Prop()
    backgroundBarColors?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
