import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-title-subtitle-style","shadow":true})
export class ApexTitleSubtitleStyle {
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
    async getData(): Promise<Exclude<globalThis.ApexTitleSubtitle['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	color: this.color,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    color?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
