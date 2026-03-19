import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-toolbar-tools","shadow":true})
export class ApexChartToolbarTools {
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
        const customIconsChildren: Array<HTMLApexChartToolbarToolsCustomIconsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-tools-custom-icons-list') ?? []) as Array<HTMLApexChartToolbarToolsCustomIconsListElement>
        this.customIcons = await customIconsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>> {
        return {
        	download: this.download,
        	selection: this.selection,
        	zoom: this.zoom,
        	zoomin: this.zoomin,
        	zoomout: this.zoomout,
        	pan: this.pan,
        	reset: this.reset,
        	customIcons: this.customIcons,
        }
    }

    @Prop()
    download?: string | boolean;
    @Prop()
    selection?: string | boolean;
    @Prop()
    zoom?: string | boolean;
    @Prop()
    zoomin?: string | boolean;
    @Prop()
    zoomout?: string | boolean;
    @Prop()
    pan?: string | boolean;
    @Prop()
    reset?: string | boolean;
    @Prop()
    customIcons?: { icon?: string | undefined; title?: string | undefined; index?: number | undefined; class?: string | undefined; click?(chart?: any, options?: any, e?: any): any; }[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
