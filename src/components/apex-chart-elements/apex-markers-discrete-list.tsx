import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-markers-discrete-list","shadow":true})
export class ApexMarkersDiscreteList {
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
        const listItems: Array<HTMLApexDiscretePointElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-discrete-point') ?? []) as Array<HTMLApexDiscretePointElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexMarkers['discrete'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.ApexDiscretePoint> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
