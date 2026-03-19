import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-candlestick-colors","shadow":true})
export class ApexPlotOptionsCandlestickColors {
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
        const upwardChildren: Array<HTMLApexPlotOptionsCandlestickColorsUpwardListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick-colors-upward-list') ?? []) as Array<HTMLApexPlotOptionsCandlestickColorsUpwardListElement>
        this.upward = await upwardChildren.at(0)?.getData()
        const downwardChildren: Array<HTMLApexPlotOptionsCandlestickColorsDownwardListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick-colors-downward-list') ?? []) as Array<HTMLApexPlotOptionsCandlestickColorsDownwardListElement>
        this.downward = await downwardChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>> {
        return {
        	upward: this.upward,
        	downward: this.downward,
        }
    }

    @Prop()
    upward?: string | string[];
    @Prop()
    downward?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
