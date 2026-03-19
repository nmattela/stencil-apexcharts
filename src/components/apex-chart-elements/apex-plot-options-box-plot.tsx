import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-box-plot","shadow":true})
export class ApexPlotOptionsBoxPlot {
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
        const colorsChildren: Array<HTMLApexPlotOptionsBoxPlotColorsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-box-plot-colors') ?? []) as Array<HTMLApexPlotOptionsBoxPlotColorsElement>
        this.colors = await colorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>> {
        return {
        	colors: this.colors,
        }
    }

    @Prop()
    colors?: { upper?: string | string[] | undefined; lower?: string | string[] | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
