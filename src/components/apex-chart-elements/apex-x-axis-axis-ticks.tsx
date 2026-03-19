import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-axis-ticks","shadow":true})
export class ApexXAxisAxisTicks {
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
    async getData(): Promise<Exclude<globalThis.ApexXAxis['axisTicks'], undefined>> {
        return {
        	show: this.show,
        	borderType: this.borderType,
        	color: this.color,
        	height: this.height,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    borderType?: string;
    @Prop()
    color?: string;
    @Prop()
    height?: number;
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
