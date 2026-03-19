import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"y-axis-annotations","shadow":true})
export class YAxisAnnotations {
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
    async getData(): Promise<globalThis.YAxisAnnotations> {
        return {
        	id: this.id,
        	y: this.y,
        	y2: this.y2,
        	strokeDashArray: this.strokeDashArray,
        	fillColor: this.fillColor,
        	borderColor: this.borderColor,
        	borderWidth: this.borderWidth,
        	opacity: this.opacity,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	width: this.width,
        	yAxisIndex: this.yAxisIndex,
        	label: this.label,
        }
    }

    @Prop()
    id?: string | number;
    @Prop()
    y?: string | number | null;
    @Prop()
    y2?: string | number | null;
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
    width?: string | number;
    @Prop()
    yAxisIndex?: number;
    @Prop()
    label?: AnnotationLabel;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
