import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-toolbar-export-csv","shadow":true})
export class ApexChartToolbarExportCsv {
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
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>['csv'], undefined>> {
        return {
        	filename: this.filename,
        	columnDelimiter: this.columnDelimiter,
        	headerCategory: this.headerCategory,
        	headerValue: this.headerValue,
        }
    }

    @Prop()
    filename?: string | undefined;
    @Prop()
    columnDelimiter?: string;
    @Prop()
    headerCategory?: string;
    @Prop()
    headerValue?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
