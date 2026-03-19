import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-pie-donut-labels-total","shadow":true})
export class ApexPlotOptionsPieDonutLabelsTotal {
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
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>['total'], undefined>> {
        return {
        	show: this.show,
        	showAlways: this.showAlways,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        	label: this.label,
        	color: this.color,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    showAlways?: boolean;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontSize?: string;
    @Prop()
    label?: string;
    @Prop()
    color?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
