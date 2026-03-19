import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-axis-border","shadow":true})
export class ApexXAxisAxisBorder {
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
    async getData(): Promise<Exclude<globalThis.ApexXAxis['axisBorder'], undefined>> {
        return {
        	show: this.show,
        	color: this.color,
        	height: this.height,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
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
