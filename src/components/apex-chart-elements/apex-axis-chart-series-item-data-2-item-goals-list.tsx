import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-axis-chart-series-item-data-2-item-goals-list","shadow":true})
export class ApexAxisChartSeriesItemData2ItemGoalsList {
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
        const listItems: Array<HTMLApexAxisChartSeriesItemData2ItemGoalsItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-axis-chart-series-item-data-2-item-goals-item') ?? []) as Array<HTMLApexAxisChartSeriesItemData2ItemGoalsItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Exclude<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
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
         }[]>[0]['goals'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
             name?: string,
             value: number,
             strokeHeight?: number;
             strokeWidth?: number;
             strokeColor?: string;
             strokeDashArray?: number;
             strokeLineCap?: 'butt' | 'square' | 'round'
           }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
