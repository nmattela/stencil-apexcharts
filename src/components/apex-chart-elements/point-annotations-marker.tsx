import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"point-annotations-marker","shadow":true})
export class PointAnnotationsMarker {
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
    async getData(): Promise<Exclude<globalThis.PointAnnotations['marker'], undefined>> {
        return {
        	size: this.size,
        	fillColor: this.fillColor,
        	strokeColor: this.strokeColor,
        	strokeWidth: this.strokeWidth,
        	shape: this.shape,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    size?: number;
    @Prop()
    fillColor?: string;
    @Prop()
    strokeColor?: string;
    @Prop()
    strokeWidth?: number;
    @Prop()
    shape?: string;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    cssClass?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
