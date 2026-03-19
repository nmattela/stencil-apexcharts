import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-crosshairs-stroke","shadow":true})
export class ApexXAxisCrosshairsStroke {
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
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['stroke'], undefined>> {
        return {
        	color: this.color,
        	width: this.width,
        	dashArray: this.dashArray,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    width?: number;
    @Prop()
    dashArray?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
