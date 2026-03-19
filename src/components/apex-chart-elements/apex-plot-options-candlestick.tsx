import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-candlestick","shadow":true})
export class ApexPlotOptionsCandlestick {
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
        const colorsChildren: Array<HTMLApexPlotOptionsCandlestickColorsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick-colors') ?? []) as Array<HTMLApexPlotOptionsCandlestickColorsElement>
        this.colors = await colorsChildren.at(0)?.getData()
        const wickChildren: Array<HTMLApexPlotOptionsCandlestickWickElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick-wick') ?? []) as Array<HTMLApexPlotOptionsCandlestickWickElement>
        this.wick = await wickChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>> {
        return {
        	type: this.type,
        	colors: this.colors,
        	wick: this.wick,
        }
    }

    @Prop()
    type?: string;
    @Prop()
    colors?: { upward?: string | string[] | undefined; downward?: string | string[] | undefined; };
    @Prop()
    wick?: { useFillColor?: boolean | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
