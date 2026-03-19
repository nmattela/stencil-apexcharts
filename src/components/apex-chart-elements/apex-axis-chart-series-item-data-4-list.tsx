import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-axis-chart-series-item-data-4-list","shadow":true})
export class ApexAxisChartSeriesItemData4List {
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
        const listItems: Array<HTML[number, (number | null)[]]Element> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === '[number-,- -(number- -|- null-)-[-]-]') ?? []) as Array<HTML[number, (number | null)[]]Element>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, [number, (number | null)[]][]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<[number, (number | null)[]]> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
