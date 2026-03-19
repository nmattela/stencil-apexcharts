import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-stroke-colors-1-list","shadow":true})
export class ApexStrokeColors1List {
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
        const listItems: Array<HTMLApexStrokeColors1ItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-colors-1-item') ?? []) as Array<HTMLApexStrokeColors1ItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, any[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<any> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
