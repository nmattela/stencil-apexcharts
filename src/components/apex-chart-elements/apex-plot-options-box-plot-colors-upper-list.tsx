import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-box-plot-colors-upper-list","shadow":true})
export class ApexPlotOptionsBoxPlotColorsUpperList {
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
        const listItems: Array<HTMLApexPlotOptionsBoxPlotColorsUpperItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-box-plot-colors-upper-item') ?? []) as Array<HTMLApexPlotOptionsBoxPlotColorsUpperItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['upper'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
