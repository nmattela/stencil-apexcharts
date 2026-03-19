import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"annotation-label-text-item","shadow":true})
export class AnnotationLabelTextItem {
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
    async getData(): Promise<Extract<Exclude<globalThis.AnnotationLabel['text'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
