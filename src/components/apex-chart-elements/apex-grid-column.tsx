import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-grid-column","shadow":true})
export class ApexGridColumn {
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
        const colorsChildren: Array<HTMLApexGridColumnColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-column-colors-list') ?? []) as Array<HTMLApexGridColumnColorsListElement>
        this.colors = await colorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['column'], undefined>> {
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
