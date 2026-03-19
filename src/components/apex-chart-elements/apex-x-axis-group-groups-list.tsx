import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-group-groups-list","shadow":true})
export class ApexXAxisGroupGroupsList {
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
        const listItems: Array<HTMLApexXAxisGroupGroupsItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-group-groups-item') ?? []) as Array<HTMLApexXAxisGroupGroupsItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['groups'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{ title: string, cols: number }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
