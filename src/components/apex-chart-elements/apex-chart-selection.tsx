import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-selection","shadow":true})
export class ApexChartSelection {
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
        const fillChildren: Array<HTMLApexChartSelectionFillElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection-fill') ?? []) as Array<HTMLApexChartSelectionFillElement>
        this.fill = await fillChildren.at(0)?.getData()
        const strokeChildren: Array<HTMLApexChartSelectionStrokeElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection-stroke') ?? []) as Array<HTMLApexChartSelectionStrokeElement>
        this.stroke = await strokeChildren.at(0)?.getData()
        const xaxisChildren: Array<HTMLApexChartSelectionXaxisElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection-xaxis') ?? []) as Array<HTMLApexChartSelectionXaxisElement>
        this.xaxis = await xaxisChildren.at(0)?.getData()
        const yaxisChildren: Array<HTMLApexChartSelectionYaxisElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection-yaxis') ?? []) as Array<HTMLApexChartSelectionYaxisElement>
        this.yaxis = await yaxisChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['selection'], undefined>> {
        return {
        	enabled: this.enabled,
        	type: this.type,
        	fill: this.fill,
        	stroke: this.stroke,
        	xaxis: this.xaxis,
        	yaxis: this.yaxis,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    type?: string;
    @Prop()
    fill?: { color?: string | undefined; opacity?: number | undefined; };
    @Prop()
    stroke?: { width?: number | undefined; color?: string | undefined; opacity?: number | undefined; dashArray?: number | undefined; };
    @Prop()
    xaxis?: { min?: number | undefined; max?: number | undefined; };
    @Prop()
    yaxis?: { min?: number | undefined; max?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
