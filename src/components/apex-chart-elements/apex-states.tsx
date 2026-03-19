import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-states","shadow":true})
export class ApexStates {
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
        const hoverChildren: Array<HTMLApexStatesHoverElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-states-hover') ?? []) as Array<HTMLApexStatesHoverElement>
        this.hover = await hoverChildren.at(0)?.getData()
        const activeChildren: Array<HTMLApexStatesActiveElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-states-active') ?? []) as Array<HTMLApexStatesActiveElement>
        this.active = await activeChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexStates> {
        return {
        	hover: this.hover,
        	active: this.active,
        }
    }

    @Prop()
    hover?: { filter?: { type?: string | undefined; } | undefined; };
    @Prop()
    active?: { allowMultipleDataPointsSelection?: boolean | undefined; filter?: { type?: string | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
