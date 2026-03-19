import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-selection-xaxis","shadow":true})
export class ApexChartSelectionXaxis {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['xaxis'], undefined>> {
        return {
        	min: this.min,
        	max: this.max,
        }
    }

    @Prop()
    min?: number;
    @Prop()
    max?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
