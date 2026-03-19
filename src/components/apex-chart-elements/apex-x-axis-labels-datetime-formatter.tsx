import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-labels-datetime-formatter","shadow":true})
export class ApexXAxisLabelsDatetimeFormatter {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['datetimeFormatter'], undefined>> {
        return {
        	year: this.year,
        	month: this.month,
        	day: this.day,
        	hour: this.hour,
        	minute: this.minute,
        	second: this.second,
        }
    }

    @Prop()
    year?: string;
    @Prop()
    month?: string;
    @Prop()
    day?: string;
    @Prop()
    hour?: string;
    @Prop()
    minute?: string;
    @Prop()
    second?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
