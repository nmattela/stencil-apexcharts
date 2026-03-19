import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-tooltip-marker","shadow":true})
export class ApexTooltipMarker {
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
        const fillColorsChildren: Array<HTMLApexTooltipMarkerFillColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-marker-fill-colors-list') ?? []) as Array<HTMLApexTooltipMarkerFillColorsListElement>
        this.fillColors = await fillColorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['marker'], undefined>> {
        return {
        	show: this.show,
        	fillColors: this.fillColors,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    fillColors?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
