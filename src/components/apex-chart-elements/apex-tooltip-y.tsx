import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-tooltip-y","shadow":true})
export class ApexTooltipY {
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
        const titleChildren: Array<HTMLApexTooltipYTitleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-y-title') ?? []) as Array<HTMLApexTooltipYTitleElement>
        this.title = await titleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexTooltipY> {
        return {
        	title: this.title,
        }
    }

    @Prop()
    title?: { formatter?(seriesName: string, opts?: any): string; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
