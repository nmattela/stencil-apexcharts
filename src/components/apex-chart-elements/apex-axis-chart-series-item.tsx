import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-axis-chart-series-item","shadow":true})
export class ApexAxisChartSeriesItem {
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
        const dataChildren: Array<HTMLApexAxisChartSeriesItemData1ListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-axis-chart-series-item-data-1-list') ?? []) as Array<HTMLApexAxisChartSeriesItemData1ListElement>
        this.data = await dataChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexAxisChartSeries[0]> {
        return {
        	name: this.name,
        	type: this.type,
        	color: this.color,
        	group: this.group,
        	hidden: this.hidden,
        	zIndex: this.zIndex,
        	parsing: this.parsing,
        	data: this.data,
        }
    }

    @Prop()
    name?: string;
    @Prop()
    type?: string;
    @Prop()
    color?: string;
    @Prop()
    group?: string;
    @Prop()
    hidden?: boolean;
    @Prop()
    zIndex?: number;
    @Prop()
    parsing?: ApexParsing;
    @Prop()
    data: (number | null)[] | { x: any; y: any; fill?: ApexFill | undefined; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: { name?: string | undefined; value: number; strokeHeight?: number | undefined; strokeWidth?: number | undefined; strokeColor?: string | undefined; strokeDashArray?: number | undefined; strokeLineCap?: "butt" | "square" | "round" | undefined; }[] | undefined; barHeightOffset?: number | undefined; columnWidthOffset?: number | undefined; }[] | [number, number | null][] | [number, (number | null)[]][] | number[][] | Record<string, any>[] = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
