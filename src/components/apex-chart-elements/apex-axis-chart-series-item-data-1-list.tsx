import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-axis-chart-series-item-data-1-list","shadow":true})
export class ApexAxisChartSeriesItemData1List {
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
        const listItems: Array<HTMLNumber | nullElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'number- -|- null') ?? []) as Array<HTMLNumber | nullElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, (number | null)[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<(number | null)> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
