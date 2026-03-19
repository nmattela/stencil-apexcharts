import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-y-axis-axis-ticks","shadow":true})
export class ApexYAxisAxisTicks {
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
    async getData(): Promise<Exclude<globalThis.ApexYAxis['axisTicks'], undefined>> {
        return {
        	show: this.show,
        	color: this.color,
        	width: this.width,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    color?: string;
    @Prop()
    width?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
