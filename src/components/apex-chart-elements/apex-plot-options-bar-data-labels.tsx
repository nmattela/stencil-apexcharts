import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-bar-data-labels","shadow":true})
export class ApexPlotOptionsBarDataLabels {
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
        const totalChildren: Array<HTMLApexPlotOptionsBarDataLabelsTotalElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-data-labels-total') ?? []) as Array<HTMLApexPlotOptionsBarDataLabelsTotalElement>
        this.total = await totalChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dataLabels'], undefined>> {
        return {
        	maxItems: this.maxItems,
        	hideOverflowingLabels: this.hideOverflowingLabels,
        	position: this.position,
        	orientation: this.orientation,
        	total: this.total,
        }
    }

    @Prop()
    maxItems?: number;
    @Prop()
    hideOverflowingLabels?: boolean;
    @Prop()
    position?: string;
    @Prop()
    orientation?: "horizontal" | "vertical";
    @Prop()
    total?: { enabled?: boolean | undefined; formatter?(val?: string | undefined, opts?: any): string; offsetX?: number | undefined; offsetY?: number | undefined; style?: { color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
