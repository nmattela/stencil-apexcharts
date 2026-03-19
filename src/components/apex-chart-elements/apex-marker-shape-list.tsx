import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-marker-shape-list","shadow":true})
export class ApexMarkerShapeList {
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
        const listItems: Array<HTMLMarkerShapeOptionsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'marker-shape-options') ?? []) as Array<HTMLMarkerShapeOptionsElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<globalThis.ApexMarkerShape, globalThis.MarkerShapeOptions[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.MarkerShapeOptions> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
