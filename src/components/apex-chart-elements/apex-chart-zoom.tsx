import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-zoom","shadow":true})
export class ApexChartZoom {
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
        const zoomedAreaChildren: Array<HTMLApexChartZoomZoomedAreaElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-zoom-zoomed-area') ?? []) as Array<HTMLApexChartZoomZoomedAreaElement>
        this.zoomedArea = await zoomedAreaChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['zoom'], undefined>> {
        return {
        	enabled: this.enabled,
        	type: this.type,
        	autoScaleYaxis: this.autoScaleYaxis,
        	allowMouseWheelZoom: this.allowMouseWheelZoom,
        	zoomedArea: this.zoomedArea,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    type?: "x" | "y" | "xy";
    @Prop()
    autoScaleYaxis?: boolean;
    @Prop()
    allowMouseWheelZoom?: boolean;
    @Prop()
    zoomedArea?: { fill?: { color?: string | undefined; opacity?: number | undefined; } | undefined; stroke?: { color?: string | undefined; opacity?: number | undefined; width?: number | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
