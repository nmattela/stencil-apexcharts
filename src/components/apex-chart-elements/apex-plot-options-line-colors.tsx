import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-line-colors","shadow":true})
export class ApexPlotOptionsLineColors {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['line'], undefined>['colors'], undefined>> {
        return {
        	threshold: this.threshold,
        	colorAboveThreshold: this.colorAboveThreshold,
        	colorBelowThreshold: this.colorBelowThreshold,
        }
    }

    @Prop()
    threshold?: number;
    @Prop()
    colorAboveThreshold?: string;
    @Prop()
    colorBelowThreshold?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
