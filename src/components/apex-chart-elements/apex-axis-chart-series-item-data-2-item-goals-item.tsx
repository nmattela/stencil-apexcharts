import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-axis-chart-series-item-data-2-item-goals-item","shadow":true})
export class ApexAxisChartSeriesItemData2ItemGoalsItem {
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
         }[]>[0]['goals'], undefined>[0]> {
        return {
        	name: this.name,
        	value: this.value,
        	strokeHeight: this.strokeHeight,
        	strokeWidth: this.strokeWidth,
        	strokeColor: this.strokeColor,
        	strokeDashArray: this.strokeDashArray,
        	strokeLineCap: this.strokeLineCap,
        }
    }

    @Prop()
    name?: string;
    @Prop()
    value: number = 0;
    @Prop()
    strokeHeight?: number;
    @Prop()
    strokeWidth?: number;
    @Prop()
    strokeColor?: string;
    @Prop()
    strokeDashArray?: number;
    @Prop()
    strokeLineCap?: "butt" | "square" | "round";

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
