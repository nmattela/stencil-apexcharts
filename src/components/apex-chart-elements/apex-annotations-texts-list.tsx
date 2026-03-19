import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-annotations-texts-list","shadow":true})
export class ApexAnnotationsTextsList {
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
        const listItems: Array<HTMLTextAnnotationsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'text-annotations') ?? []) as Array<HTMLTextAnnotationsElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['texts'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<globalThis.TextAnnotations> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
