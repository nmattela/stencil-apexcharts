import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-bar-data-labels-total-style","shadow":true})
export class ApexPlotOptionsBarDataLabelsTotalStyle {
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
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dataLabels'], undefined>['total'], undefined>['style'], undefined>> {
        return {
        	color: this.color,
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
