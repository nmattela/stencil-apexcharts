import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-toolbar-export","shadow":true})
export class ApexChartToolbarExport {
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
        const csvChildren: Array<HTMLApexChartToolbarExportCsvElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-export-csv') ?? []) as Array<HTMLApexChartToolbarExportCsvElement>
        this.csv = await csvChildren.at(0)?.getData()
        const svgChildren: Array<HTMLApexChartToolbarExportSvgElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-export-svg') ?? []) as Array<HTMLApexChartToolbarExportSvgElement>
        this.svg = await svgChildren.at(0)?.getData()
        const pngChildren: Array<HTMLApexChartToolbarExportPngElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-export-png') ?? []) as Array<HTMLApexChartToolbarExportPngElement>
        this.png = await pngChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>> {
        return {
        	width: this.width,
        	scale: this.scale,
        	csv: this.csv,
        	svg: this.svg,
        	png: this.png,
        }
    }

    @Prop()
    width?: number;
    @Prop()
    scale?: number;
    @Prop()
    csv?: { filename?: string | undefined; columnDelimiter?: string | undefined; headerCategory?: string | undefined; headerValue?: string | undefined; categoryFormatter?(value?: number | undefined): any; valueFormatter?(value?: number | undefined): any; };
    @Prop()
    svg?: { filename?: string | undefined; };
    @Prop()
    png?: { filename?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
