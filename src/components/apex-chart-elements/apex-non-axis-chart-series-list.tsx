import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-non-axis-chart-series-list","shadow":true})
export class ApexNonAxisChartSeriesList {
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
        const listItems: Array<HTMLApexNonAxisChartSeriesItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-non-axis-chart-series-item') ?? []) as Array<HTMLApexNonAxisChartSeriesItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<globalThis.ApexNonAxisChartSeries, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
