import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radial-bar-data-labels-total","shadow":true})
export class ApexPlotOptionsRadialBarDataLabelsTotal {
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
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>['total'], undefined>> {
        return {
        	show: this.show,
        	label: this.label,
        	color: this.color,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    label?: string;
    @Prop()
    color?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontSize?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
