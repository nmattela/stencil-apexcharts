import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radial-bar-bar-labels-formatter","shadow":true})
export class ApexPlotOptionsRadialBarBarLabelsFormatter {
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
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['barLabels'], undefined>['formatter'], undefined>> {
        return new Function(this.element.innerText) as (barName: string, opts?: any) => string
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
