import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-zoom-zoomed-area-stroke","shadow":true})
export class ApexChartZoomZoomedAreaStroke {
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
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>['stroke'], undefined>> {
        return {
        	color: this.color,
        	opacity: this.opacity,
        	width: this.width,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    opacity?: number;
    @Prop()
    width?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
