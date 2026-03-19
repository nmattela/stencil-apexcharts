import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-theme","shadow":true})
export class ApexTheme {
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
        const monochromeChildren: Array<HTMLApexThemeMonochromeElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-theme-monochrome') ?? []) as Array<HTMLApexThemeMonochromeElement>
        this.monochrome = await monochromeChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexTheme> {
        return {
        	mode: this.mode,
        	palette: this.palette,
        	monochrome: this.monochrome,
        }
    }

    @Prop()
    mode?: "light" | "dark";
    @Prop()
    palette?: string;
    @Prop()
    monochrome?: { enabled?: boolean | undefined; color?: string | undefined; shadeTo?: "light" | "dark" | undefined; shadeIntensity?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
