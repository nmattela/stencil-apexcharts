import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-crosshairs-fill-gradient","shadow":true})
export class ApexXAxisCrosshairsFillGradient {
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
        const stopsChildren: Array<HTMLApexXAxisCrosshairsFillGradientStopsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs-fill-gradient-stops-list') ?? []) as Array<HTMLApexXAxisCrosshairsFillGradientStopsListElement>
        this.stops = await stopsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>['gradient'], undefined>> {
        return {
        	colorFrom: this.colorFrom,
        	colorTo: this.colorTo,
        	opacityFrom: this.opacityFrom,
        	opacityTo: this.opacityTo,
        	stops: this.stops,
        }
    }

    @Prop()
    colorFrom?: string;
    @Prop()
    colorTo?: string;
    @Prop()
    opacityFrom?: number;
    @Prop()
    opacityTo?: number;
    @Prop()
    stops?: number[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
