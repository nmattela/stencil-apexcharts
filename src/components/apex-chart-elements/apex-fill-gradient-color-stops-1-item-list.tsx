import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-fill-gradient-color-stops-1-item-list","shadow":true})
export class ApexFillGradientColorStops1ItemList {
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
        const listItems: Array<HTMLApexColorStopElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-color-stop') ?? []) as Array<HTMLApexColorStopElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, globalThis.ApexColorStop[][]>[0]> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.ApexColorStop> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
