import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-animations-animate-gradually","shadow":true})
export class ApexChartAnimationsAnimateGradually {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['animations'], undefined>['animateGradually'], undefined>> {
        return {
        	enabled: this.enabled,
        	delay: this.delay,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    delay?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
