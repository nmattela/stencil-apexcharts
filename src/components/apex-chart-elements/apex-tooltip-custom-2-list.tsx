import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-tooltip-custom-2-list","shadow":true})
export class ApexTooltipCustom2List {
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
        const listItems: Array<HTMLApexTooltipCustom2ItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-custom-2-item') ?? []) as Array<HTMLApexTooltipCustom2ItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexTooltip['custom'], undefined>, ((options: any) => any)[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<((options: any) => any)> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
