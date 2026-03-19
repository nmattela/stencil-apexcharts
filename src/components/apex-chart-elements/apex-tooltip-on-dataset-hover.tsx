import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-tooltip-on-dataset-hover","shadow":true})
export class ApexTooltipOnDatasetHover {
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
    async getData(): Promise<Exclude<globalThis.ApexTooltip['onDatasetHover'], undefined>> {
        return {
        	highlightDataSeries: this.highlightDataSeries,
        }
    }

    @Prop()
    highlightDataSeries?: boolean;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
