import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"image-annotations","shadow":true})
export class ImageAnnotations {
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
    async getData(): Promise<globalThis.ImageAnnotations> {
        return {
        	path: this.path,
        	x: this.x,
        	y: this.y,
        	width: this.width,
        	height: this.height,
        }
    }

    @Prop()
    path?: string;
    @Prop()
    x?: number;
    @Prop()
    y?: number;
    @Prop()
    width?: number;
    @Prop()
    height?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
