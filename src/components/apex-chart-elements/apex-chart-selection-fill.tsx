import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-selection-fill","shadow":true})
export class ApexChartSelectionFill {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['fill'], undefined>> {
        return {
        	color: this.color,
        	opacity: this.opacity,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    opacity?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
