import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-brush","shadow":true})
export class ApexChartBrush {
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
        const targetsChildren: Array<HTMLApexChartBrushTargetsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-brush-targets-list') ?? []) as Array<HTMLApexChartBrushTargetsListElement>
        this.targets = await targetsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['brush'], undefined>> {
        return {
        	enabled: this.enabled,
        	autoScaleYaxis: this.autoScaleYaxis,
        	target: this.target,
        	targets: this.targets,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    autoScaleYaxis?: boolean;
    @Prop()
    target?: string;
    @Prop()
    targets?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
