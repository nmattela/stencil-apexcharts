import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-pie-donut-labels","shadow":true})
export class ApexPlotOptionsPieDonutLabels {
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
        const nameChildren: Array<HTMLApexPlotOptionsPieDonutLabelsNameElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut-labels-name') ?? []) as Array<HTMLApexPlotOptionsPieDonutLabelsNameElement>
        this.name = await nameChildren.at(0)?.getData()
        const valueChildren: Array<HTMLApexPlotOptionsPieDonutLabelsValueElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut-labels-value') ?? []) as Array<HTMLApexPlotOptionsPieDonutLabelsValueElement>
        this.value = await valueChildren.at(0)?.getData()
        const totalChildren: Array<HTMLApexPlotOptionsPieDonutLabelsTotalElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut-labels-total') ?? []) as Array<HTMLApexPlotOptionsPieDonutLabelsTotalElement>
        this.total = await totalChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>> {
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
    name?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; };
    @Prop()
    value?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; };
    @Prop()
    total?: { show?: boolean | undefined; showAlways?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; label?: string | undefined; color?: string | undefined; formatter?(w: any): string; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
