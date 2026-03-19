import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-data-labels-style-colors-list","shadow":true})
export class ApexDataLabelsStyleColorsList {
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
        const listItems: Array<HTMLApexDataLabelsStyleColorsItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-data-labels-style-colors-item') ?? []) as Array<HTMLApexDataLabelsStyleColorsItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexDataLabels['style'], undefined>['colors'], undefined>> {
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
