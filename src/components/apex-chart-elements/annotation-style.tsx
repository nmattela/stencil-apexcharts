import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"annotation-style","shadow":true})
export class AnnotationStyle {
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
        const paddingChildren: Array<HTMLAnnotationStylePaddingElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'annotation-style-padding') ?? []) as Array<HTMLAnnotationStylePaddingElement>
        this.padding = await paddingChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.AnnotationStyle> {
        return {
        	background: this.background,
        	color: this.color,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        	cssClass: this.cssClass,
        	padding: this.padding,
        }
    }

    @Prop()
    background?: string;
    @Prop()
    color?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontSize?: string;
    @Prop()
    cssClass?: string;
    @Prop()
    padding?: { left?: number | undefined; right?: number | undefined; top?: number | undefined; bottom?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
