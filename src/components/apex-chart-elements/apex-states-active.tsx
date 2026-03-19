import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-states-active","shadow":true})
export class ApexStatesActive {
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
        const filterChildren: Array<HTMLApexStatesActiveFilterElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-states-active-filter') ?? []) as Array<HTMLApexStatesActiveFilterElement>
        this.filter = await filterChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexStates['active'], undefined>> {
        return {
        	allowMultipleDataPointsSelection: this.allowMultipleDataPointsSelection,
        	filter: this.filter,
        }
    }

    @Prop()
    allowMultipleDataPointsSelection?: boolean;
    @Prop()
    filter?: { type?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
