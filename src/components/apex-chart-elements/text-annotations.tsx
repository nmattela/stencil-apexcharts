import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"text-annotations","shadow":true})
export class TextAnnotations {
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
    async getData(): Promise<globalThis.TextAnnotations> {
        return {
        	x: this.x,
        	y: this.y,
        	text: this.text,
        	textAnchor: this.textAnchor,
        	foreColor: this.foreColor,
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	backgroundColor: this.backgroundColor,
        	borderColor: this.borderColor,
        	borderRadius: this.borderRadius,
        	borderWidth: this.borderWidth,
        	paddingLeft: this.paddingLeft,
        	paddingRight: this.paddingRight,
        	paddingTop: this.paddingTop,
        	paddingBottom: this.paddingBottom,
        }
    }

    @Prop()
    x?: number;
    @Prop()
    y?: number;
    @Prop()
    text?: string;
    @Prop()
    textAnchor?: string;
    @Prop()
    foreColor?: string;
    @Prop()
    fontSize?: string | number;
    @Prop()
    fontFamily?: string | undefined;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    backgroundColor?: string;
    @Prop()
    borderColor?: string;
    @Prop()
    borderRadius?: number;
    @Prop()
    borderWidth?: number;
    @Prop()
    paddingLeft?: number;
    @Prop()
    paddingRight?: number;
    @Prop()
    paddingTop?: number;
    @Prop()
    paddingBottom?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
