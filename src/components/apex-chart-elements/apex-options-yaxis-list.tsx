import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-options-yaxis-list","shadow":true})
export class ApexOptionsYaxisList {
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
        const listItems: Array<HTMLApexYAxisElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis') ?? []) as Array<HTMLApexYAxisElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<ApexChartsApexOptions['yaxis'], undefined>, globalThis.ApexYAxis[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.ApexYAxis> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
