import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-annotations-points-list","shadow":true})
export class ApexAnnotationsPointsList {
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
        const listItems: Array<HTMLPointAnnotationsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'point-annotations') ?? []) as Array<HTMLPointAnnotationsElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['points'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.PointAnnotations> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
