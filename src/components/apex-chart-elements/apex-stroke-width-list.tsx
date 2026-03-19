import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-stroke-width-list","shadow":true})
export class ApexStrokeWidthList {
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
        const listItems: Array<HTMLApexStrokeWidthItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-width-item') ?? []) as Array<HTMLApexStrokeWidthItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['width'], undefined>, number[]>> {
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
