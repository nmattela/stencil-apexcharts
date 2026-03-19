import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-selection-stroke","shadow":true})
export class ApexChartSelectionStroke {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['stroke'], undefined>> {
        return {
        	width: this.width,
        	color: this.color,
        	opacity: this.opacity,
        	dashArray: this.dashArray,
        }
    }

    @Prop()
    width?: number;
    @Prop()
    color?: string;
    @Prop()
    opacity?: number;
    @Prop()
    dashArray?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
