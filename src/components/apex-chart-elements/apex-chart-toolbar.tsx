import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-toolbar","shadow":true})
export class ApexChartToolbar {
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
        const toolsChildren: Array<HTMLApexChartToolbarToolsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-tools') ?? []) as Array<HTMLApexChartToolbarToolsElement>
        this.tools = await toolsChildren.at(0)?.getData()
        const exportChildren: Array<HTMLApexChartToolbarExportElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-export') ?? []) as Array<HTMLApexChartToolbarExportElement>
        this.export = await exportChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['toolbar'], undefined>> {
        return {
        	show: this.show,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	autoSelected: this.autoSelected,
        	tools: this.tools,
        	export: this.export,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    autoSelected?: "zoom" | "selection" | "pan";
    @Prop()
    tools?: { download?: string | boolean | undefined; selection?: string | boolean | undefined; zoom?: string | boolean | undefined; zoomin?: string | boolean | undefined; zoomout?: string | boolean | undefined; pan?: string | boolean | undefined; reset?: string | boolean | undefined; customIcons?: { icon?: string | undefined; title?: string | undefined; index?: number | undefined; class?: string | undefined; click?(chart?: any, options?: any, e?: any): any; }[] | undefined; };
    @Prop()
    export?: { csv?: { filename?: string | undefined; columnDelimiter?: string | undefined; headerCategory?: string | undefined; headerValue?: string | undefined; categoryFormatter?(value?: number | undefined): any; valueFormatter?(value?: number | undefined): any; } | undefined; svg?: { filename?: string | undefined; } | undefined; png?: { filename?: string | undefined; } | undefined; width?: number | undefined; scale?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
