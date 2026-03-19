import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radial-bar-hollow","shadow":true})
export class ApexPlotOptionsRadialBarHollow {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['hollow'], undefined>> {
        return {
        	margin: this.margin,
        	size: this.size,
        	background: this.background,
        	image: this.image,
        	imageWidth: this.imageWidth,
        	imageHeight: this.imageHeight,
        	imageOffsetX: this.imageOffsetX,
        	imageOffsetY: this.imageOffsetY,
        	imageClipped: this.imageClipped,
        	position: this.position,
        	dropShadow: this.dropShadow,
        }
    }

    @Prop()
    margin?: number;
    @Prop()
    size?: string;
    @Prop()
    background?: string;
    @Prop()
    image?: string;
    @Prop()
    imageWidth?: number;
    @Prop()
    imageHeight?: number;
    @Prop()
    imageOffsetX?: number;
    @Prop()
    imageOffsetY?: number;
    @Prop()
    imageClipped?: boolean;
    @Prop()
    position?: "front" | "back";
    @Prop()
    dropShadow?: ApexDropShadow;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
