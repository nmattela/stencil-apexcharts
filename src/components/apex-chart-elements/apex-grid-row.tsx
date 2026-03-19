import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-grid-row","shadow":true})
export class ApexGridRow {
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
        const colorsChildren: Array<HTMLApexGridRowColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-row-colors-list') ?? []) as Array<HTMLApexGridRowColorsListElement>
        this.colors = await colorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['row'], undefined>> {
        return {
        	opacity: this.opacity,
        	colors: this.colors,
        }
    }

    @Prop()
    opacity?: number;
    @Prop()
    colors?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
