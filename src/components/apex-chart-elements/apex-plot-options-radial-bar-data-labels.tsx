import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radial-bar-data-labels","shadow":true})
export class ApexPlotOptionsRadialBarDataLabels {
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
        const nameChildren: Array<HTMLApexPlotOptionsRadialBarDataLabelsNameElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-data-labels-name') ?? []) as Array<HTMLApexPlotOptionsRadialBarDataLabelsNameElement>
        this.name = await nameChildren.at(0)?.getData()
        const valueChildren: Array<HTMLApexPlotOptionsRadialBarDataLabelsValueElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-data-labels-value') ?? []) as Array<HTMLApexPlotOptionsRadialBarDataLabelsValueElement>
        this.value = await valueChildren.at(0)?.getData()
        const totalChildren: Array<HTMLApexPlotOptionsRadialBarDataLabelsTotalElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-data-labels-total') ?? []) as Array<HTMLApexPlotOptionsRadialBarDataLabelsTotalElement>
        this.total = await totalChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>> {
        return {
        	show: this.show,
        	name: this.name,
        	value: this.value,
        	total: this.total,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    name?: { show?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; color?: string | undefined; offsetY?: number | undefined; };
    @Prop()
    value?: { show?: boolean | undefined; fontFamily?: string | undefined; fontSize?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: number): string; };
    @Prop()
    total?: { show?: boolean | undefined; label?: string | undefined; color?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; formatter?(opts: any): string; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
