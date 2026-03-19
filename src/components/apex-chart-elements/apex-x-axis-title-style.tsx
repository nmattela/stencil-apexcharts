import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-title-style","shadow":true})
export class ApexXAxisTitleStyle {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['title'], undefined>['style'], undefined>> {
        return {
        	color: this.color,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        	cssClass: this.cssClass,
        }
    }

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

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
