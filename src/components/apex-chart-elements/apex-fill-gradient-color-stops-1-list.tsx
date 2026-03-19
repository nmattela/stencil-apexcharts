import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-fill-gradient-color-stops-1-list","shadow":true})
export class ApexFillGradientColorStops1List {
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
        const listItems: Array<HTMLApexFillGradientColorStops1ItemListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-color-stops-1-item-list') ?? []) as Array<HTMLApexFillGradientColorStops1ItemListElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, globalThis.ApexColorStop[][]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.ApexColorStop[]> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
