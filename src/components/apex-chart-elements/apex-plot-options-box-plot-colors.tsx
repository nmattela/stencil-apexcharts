import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-box-plot-colors","shadow":true})
export class ApexPlotOptionsBoxPlotColors {
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
        const upperChildren: Array<HTMLApexPlotOptionsBoxPlotColorsUpperListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-box-plot-colors-upper-list') ?? []) as Array<HTMLApexPlotOptionsBoxPlotColorsUpperListElement>
        this.upper = await upperChildren.at(0)?.getData()
        const lowerChildren: Array<HTMLApexPlotOptionsBoxPlotColorsLowerListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-box-plot-colors-lower-list') ?? []) as Array<HTMLApexPlotOptionsBoxPlotColorsLowerListElement>
        this.lower = await lowerChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>> {
        return {
        	upper: this.upper,
        	lower: this.lower,
        }
    }

    @Prop()
    upper?: string | string[];
    @Prop()
    lower?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
