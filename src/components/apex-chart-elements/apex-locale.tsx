import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-locale","shadow":true})
export class ApexLocale {
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
        const optionsChildren: Array<HTMLApexLocaleOptionsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options') ?? []) as Array<HTMLApexLocaleOptionsElement>
        this.options = await optionsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexLocale> {
        return {
        	name: this.name,
        	options: this.options,
        }
    }

    @Prop()
    name?: string;
    @Prop()
    options?: { months?: string[] | undefined; shortMonths?: string[] | undefined; days?: string[] | undefined; shortDays?: string[] | undefined; toolbar?: { download?: string | undefined; selection?: string | undefined; selectionZoom?: string | undefined; zoomIn?: string | undefined; zoomOut?: string | undefined; pan?: string | undefined; reset?: string | undefined; exportToSVG?: string | undefined; exportToPNG?: string | undefined; exportToCSV?: string | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
