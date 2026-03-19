import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-legend-custom-legend-items-list","shadow":true})
export class ApexLegendCustomLegendItemsList {
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
        const listItems: Array<HTMLApexLegendCustomLegendItemsItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-custom-legend-items-item') ?? []) as Array<HTMLApexLegendCustomLegendItemsItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['customLegendItems'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
