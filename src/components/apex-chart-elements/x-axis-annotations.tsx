import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"x-axis-annotations","shadow":true})
export class XAxisAnnotations {
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
    async getData(): Promise<globalThis.XAxisAnnotations> {
        return {
        	id: this.id,
        	x: this.x,
        	x2: this.x2,
        	strokeDashArray: this.strokeDashArray,
        	fillColor: this.fillColor,
        	borderColor: this.borderColor,
        	borderWidth: this.borderWidth,
        	opacity: this.opacity,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	label: this.label,
        }
    }

    @Prop()
    id?: string | number;
    @Prop()
    x?: string | number | null;
    @Prop()
    x2?: string | number | null;
    @Prop()
    strokeDashArray?: number;
    @Prop()
    fillColor?: string;
    @Prop()
    borderColor?: string;
    @Prop()
    borderWidth?: number;
    @Prop()
    opacity?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    label?: AnnotationLabel;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
