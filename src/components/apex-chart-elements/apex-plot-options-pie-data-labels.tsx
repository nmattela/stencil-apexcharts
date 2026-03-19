import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-pie-data-labels","shadow":true})
export class ApexPlotOptionsPieDataLabels {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['dataLabels'], undefined>> {
        return {
        	offset: this.offset,
        	minAngleToShowLabel: this.minAngleToShowLabel,
        }
    }

    @Prop()
    offset?: number;
    @Prop()
    minAngleToShowLabel?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
