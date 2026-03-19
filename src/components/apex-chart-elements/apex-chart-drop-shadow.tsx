import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-drop-shadow","shadow":true})
export class ApexChartDropShadow {
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
        const enabledOnSeriesChildren: Array<HTMLApexChartDropShadowEnabledOnSeriesListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-drop-shadow-enabled-on-series-list') ?? []) as Array<HTMLApexChartDropShadowEnabledOnSeriesListElement>
        this.enabledOnSeries = await enabledOnSeriesChildren.at(0)?.getData()
        const colorChildren: Array<HTMLApexChartDropShadowColorListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-drop-shadow-color-list') ?? []) as Array<HTMLApexChartDropShadowColorListElement>
        this.color = await colorChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<(Omit<NonNullable<Exclude<globalThis.ApexChart['dropShadow'], undefined>>, 'color'> & { color?: string | string[] })> {
        return {
        	enabledOnSeries: this.enabledOnSeries,
        	color: this.color,
        }
    }

    @Prop()
    enabledOnSeries?: number[] | undefined;
    @Prop()
    color?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
