import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-axis-chart-series-item-data-6-list","shadow":true})
export class ApexAxisChartSeriesItemData6List {
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
        const listItems: Array<HTMLRecord<string, any>Element> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'record-<string-,- any->') ?? []) as Array<HTMLRecord<string, any>Element>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, globalThis.Record<string, any>[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.Record<string, any>> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
