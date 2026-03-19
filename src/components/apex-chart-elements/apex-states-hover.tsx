import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-states-hover","shadow":true})
export class ApexStatesHover {
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
        const filterChildren: Array<HTMLApexStatesHoverFilterElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-states-hover-filter') ?? []) as Array<HTMLApexStatesHoverFilterElement>
        this.filter = await filterChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexStates['hover'], undefined>> {
        return {
        	filter: this.filter,
        }
    }

    @Prop()
    filter?: { type?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
