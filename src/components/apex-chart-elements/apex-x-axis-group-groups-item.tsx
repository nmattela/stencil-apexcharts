import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-group-groups-item","shadow":true})
export class ApexXAxisGroupGroupsItem {
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
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['groups'], undefined>[0]> {
        return {
        	title: this.title,
        	cols: this.cols,
        }
    }

    @Prop()
    title: string = '';
    @Prop()
    cols: number = 0;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
