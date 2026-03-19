import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-zoom-zoomed-area-fill","shadow":true})
export class ApexChartZoomZoomedAreaFill {
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
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>['fill'], undefined>> {
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
