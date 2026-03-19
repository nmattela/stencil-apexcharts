import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-markers-hover","shadow":true})
export class ApexMarkersHover {
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
    async getData(): Promise<Exclude<globalThis.ApexMarkers['hover'], undefined>> {
        return {
        	size: this.size,
        	sizeOffset: this.sizeOffset,
        }
    }

    @Prop()
    size?: number;
    @Prop()
    sizeOffset?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
