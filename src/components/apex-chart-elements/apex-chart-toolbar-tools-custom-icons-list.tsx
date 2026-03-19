import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-toolbar-tools-custom-icons-list","shadow":true})
export class ApexChartToolbarToolsCustomIconsList {
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
        const listItems: Array<HTMLApexChartToolbarToolsCustomIconsItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-tools-custom-icons-item') ?? []) as Array<HTMLApexChartToolbarToolsCustomIconsItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>['customIcons'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
                icon?: string
                title?: string
                index?: number
                class?: string
                click?(chart?: any, options?: any, e?: any): any
              }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
