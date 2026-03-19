import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-color-stop","shadow":true})
export class ApexColorStop {
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
    async getData(): Promise<globalThis.ApexColorStop> {
        return {
        	offset: this.offset,
        	color: this.color,
        	opacity: this.opacity,
        }
    }

    @Prop()
    offset: number = 0;
    @Prop()
    color: string = '';
    @Prop()
    opacity: number = 0;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
