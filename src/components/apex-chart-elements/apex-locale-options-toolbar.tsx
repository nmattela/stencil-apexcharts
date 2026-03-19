import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-locale-options-toolbar","shadow":true})
export class ApexLocaleOptionsToolbar {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['toolbar'], undefined>> {
        return {
        	download: this.download,
        	selection: this.selection,
        	selectionZoom: this.selectionZoom,
        	zoomIn: this.zoomIn,
        	zoomOut: this.zoomOut,
        	pan: this.pan,
        	reset: this.reset,
        	exportToSVG: this.exportToSVG,
        	exportToPNG: this.exportToPNG,
        	exportToCSV: this.exportToCSV,
        }
    }

    @Prop()
    download?: string;
    @Prop()
    selection?: string;
    @Prop()
    selectionZoom?: string;
    @Prop()
    zoomIn?: string;
    @Prop()
    zoomOut?: string;
    @Prop()
    pan?: string;
    @Prop()
    reset?: string;
    @Prop()
    exportToSVG?: string;
    @Prop()
    exportToPNG?: string;
    @Prop()
    exportToCSV?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
