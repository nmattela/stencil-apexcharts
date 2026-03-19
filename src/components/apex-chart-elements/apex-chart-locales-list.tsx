import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-locales-list","shadow":true})
export class ApexChartLocalesList {
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
        const listItems: Array<HTMLApexLocaleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale') ?? []) as Array<HTMLApexLocaleElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['locales'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.ApexLocale> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
