import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-pie","shadow":true})
export class ApexPlotOptionsPie {
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
        const dataLabelsChildren: Array<HTMLApexPlotOptionsPieDataLabelsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-data-labels') ?? []) as Array<HTMLApexPlotOptionsPieDataLabelsElement>
        this.dataLabels = await dataLabelsChildren.at(0)?.getData()
        const donutChildren: Array<HTMLApexPlotOptionsPieDonutElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut') ?? []) as Array<HTMLApexPlotOptionsPieDonutElement>
        this.donut = await donutChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['pie'], undefined>> {
        return {
        	startAngle: this.startAngle,
        	endAngle: this.endAngle,
        	customScale: this.customScale,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	expandOnClick: this.expandOnClick,
        	dataLabels: this.dataLabels,
        	donut: this.donut,
        }
    }

    @Prop()
    startAngle?: number;
    @Prop()
    endAngle?: number;
    @Prop()
    customScale?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    expandOnClick?: boolean;
    @Prop()
    dataLabels?: { offset?: number | undefined; minAngleToShowLabel?: number | undefined; };
    @Prop()
    donut?: { size?: string | undefined; background?: string | undefined; labels?: { show?: boolean | undefined; name?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; } | undefined; value?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; } | undefined; total?: { show?: boolean | undefined; showAlways?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; label?: string | undefined; color?: string | undefined; formatter?(w: any): string; } | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
