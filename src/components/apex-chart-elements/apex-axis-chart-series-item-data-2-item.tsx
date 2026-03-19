import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-axis-chart-series-item-data-2-item","shadow":true})
export class ApexAxisChartSeriesItemData2Item {
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
        const goalsChildren: Array<HTMLApexAxisChartSeriesItemData2ItemGoalsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-axis-chart-series-item-data-2-item-goals-list') ?? []) as Array<HTMLApexAxisChartSeriesItemData2ItemGoalsListElement>
        this.goals = await goalsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
           x: any;
           y: any;
           fill?: globalThis.ApexFill;
           fillColor?: string;
           strokeColor?: string;
           meta?: any;
           goals?: {
             name?: string,
             value: number,
             strokeHeight?: number;
             strokeWidth?: number;
             strokeColor?: string;
             strokeDashArray?: number;
             strokeLineCap?: 'butt' | 'square' | 'round'
           }[];
           barHeightOffset?: number;
           columnWidthOffset?: number;
         }[]>[0]> {
        return {
        	x: this.x,
        	y: this.y,
        	fillColor: this.fillColor,
        	strokeColor: this.strokeColor,
        	meta: this.meta,
        	barHeightOffset: this.barHeightOffset,
        	columnWidthOffset: this.columnWidthOffset,
        	fill: this.fill,
        	goals: this.goals,
        }
    }

    @Prop()
    x: any = null;
    @Prop()
    y: any = null;
    @Prop()
    fillColor?: string;
    @Prop()
    strokeColor?: string;
    @Prop()
    meta?: any;
    @Prop()
    barHeightOffset?: number;
    @Prop()
    columnWidthOffset?: number;
    @Prop()
    fill?: ApexFill;
    @Prop()
    goals?: { name?: string | undefined; value: number; strokeHeight?: number | undefined; strokeWidth?: number | undefined; strokeColor?: string | undefined; strokeDashArray?: number | undefined; strokeLineCap?: "butt" | "square" | "round" | undefined; }[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
