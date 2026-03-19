import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-drop-shadow-enabled-on-series-list","shadow":true})
export class ApexChartDropShadowEnabledOnSeriesList {
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
        const listItems: Array<HTMLApexChartDropShadowEnabledOnSeriesItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-drop-shadow-enabled-on-series-item') ?? []) as Array<HTMLApexChartDropShadowEnabledOnSeriesItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<(Omit<NonNullable<Exclude<globalThis.ApexChart['dropShadow'], undefined>>, 'color'> & { color?: string | string[] })['enabledOnSeries'], undefined>, number[]>> {
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
