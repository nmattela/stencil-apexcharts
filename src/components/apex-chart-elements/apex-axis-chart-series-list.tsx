import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-axis-chart-series-list","shadow":true})
export class ApexAxisChartSeriesList {
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
        const listItems: Array<HTMLApexAxisChartSeriesItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-axis-chart-series-item') ?? []) as Array<HTMLApexAxisChartSeriesItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<globalThis.ApexAxisChartSeries> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
         name?: string
         type?: string
         color?: string
         group?: string
         hidden?: boolean
         zIndex?: number
         parsing?: globalThis.ApexParsing;
         data:
         | (number | null)[]
         | {
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
         }[]
         | [number, number | null][]
         | [number, (number | null)[]][]
         | number[][]
         | globalThis.Record<string, any>[];
        }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
