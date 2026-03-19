import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-line","shadow":true})
export class ApexPlotOptionsLine {
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
        const colorsChildren: Array<HTMLApexPlotOptionsLineColorsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-line-colors') ?? []) as Array<HTMLApexPlotOptionsLineColorsElement>
        this.colors = await colorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['line'], undefined>> {
        return {
        	isSlopeChart: this.isSlopeChart,
        	colors: this.colors,
        }
    }

    @Prop()
    isSlopeChart?: boolean;
    @Prop()
    colors?: { threshold?: number | undefined; colorAboveThreshold?: string | undefined; colorBelowThreshold?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
