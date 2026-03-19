import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"annotation-style-padding","shadow":true})
export class AnnotationStylePadding {
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
    async getData(): Promise<Exclude<globalThis.AnnotationStyle['padding'], undefined>> {
        return {
        	left: this.left,
        	right: this.right,
        	top: this.top,
        	bottom: this.bottom,
        }
    }

    @Prop()
    left?: number;
    @Prop()
    right?: number;
    @Prop()
    top?: number;
    @Prop()
    bottom?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
