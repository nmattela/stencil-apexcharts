import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-options-responsive-list","shadow":true})
export class ApexOptionsResponsiveList {
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
        const listItems: Array<HTMLApexResponsiveElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-responsive') ?? []) as Array<HTMLApexResponsiveElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['responsive'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.ApexResponsive> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
