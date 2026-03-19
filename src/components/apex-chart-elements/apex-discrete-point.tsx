import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-discrete-point","shadow":true})
export class ApexDiscretePoint {
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
    async getData(): Promise<globalThis.ApexDiscretePoint> {
        return {
        	seriesIndex: this.seriesIndex,
        	dataPointIndex: this.dataPointIndex,
        	fillColor: this.fillColor,
        	strokeColor: this.strokeColor,
        	size: this.size,
        	shape: this.shape,
        }
    }

    @Prop()
    seriesIndex?: number;
    @Prop()
    dataPointIndex?: number;
    @Prop()
    fillColor?: string;
    @Prop()
    strokeColor?: string;
    @Prop()
    size?: number;
    @Prop()
    shape?: ApexMarkerShape;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
