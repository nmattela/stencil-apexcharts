import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-theme-monochrome","shadow":true})
export class ApexThemeMonochrome {
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
    async getData(): Promise<Exclude<globalThis.ApexTheme['monochrome'], undefined>> {
        return {
        	enabled: this.enabled,
        	color: this.color,
        	shadeTo: this.shadeTo,
        	shadeIntensity: this.shadeIntensity,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    color?: string;
    @Prop()
    shadeTo?: "light" | "dark";
    @Prop()
    shadeIntensity?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
