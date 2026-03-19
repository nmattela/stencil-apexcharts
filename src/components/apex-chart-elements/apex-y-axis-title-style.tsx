import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-y-axis-title-style","shadow":true})
export class ApexYAxisTitleStyle {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexYAxis['title'], undefined>['style'], undefined>> {
        return {
        	color: this.color,
        	fontSize: this.fontSize,
        	fontWeight: this.fontWeight,
        	fontFamily: this.fontFamily,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    fontSize?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontFamily?: string;
    @Prop()
    cssClass?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
