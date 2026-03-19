import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-legend-labels","shadow":true})
export class ApexLegendLabels {
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
        const colorsChildren: Array<HTMLApexLegendLabelsColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-labels-colors-list') ?? []) as Array<HTMLApexLegendLabelsColorsListElement>
        this.colors = await colorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['labels'], undefined>> {
        return {
        	useSeriesColors: this.useSeriesColors,
        	colors: this.colors,
        }
    }

    @Prop()
    useSeriesColors?: boolean;
    @Prop()
    colors?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
