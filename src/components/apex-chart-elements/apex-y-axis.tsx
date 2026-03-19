import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-y-axis","shadow":true})
export class ApexYAxis {
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
        const seriesNameChildren: Array<HTMLApexYAxisSeriesNameListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-series-name-list') ?? []) as Array<HTMLApexYAxisSeriesNameListElement>
        this.seriesName = await seriesNameChildren.at(0)?.getData()
        const minChildren: Array<HTMLApexYAxisMinElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-min') ?? []) as Array<HTMLApexYAxisMinElement>
        this.min = await minChildren.at(0)?.getData()
        const maxChildren: Array<HTMLApexYAxisMaxElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-max') ?? []) as Array<HTMLApexYAxisMaxElement>
        this.max = await maxChildren.at(0)?.getData()
        const labelsChildren: Array<HTMLApexYAxisLabelsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-labels') ?? []) as Array<HTMLApexYAxisLabelsElement>
        this.labels = await labelsChildren.at(0)?.getData()
        const axisBorderChildren: Array<HTMLApexYAxisAxisBorderElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-axis-border') ?? []) as Array<HTMLApexYAxisAxisBorderElement>
        this.axisBorder = await axisBorderChildren.at(0)?.getData()
        const axisTicksChildren: Array<HTMLApexYAxisAxisTicksElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-axis-ticks') ?? []) as Array<HTMLApexYAxisAxisTicksElement>
        this.axisTicks = await axisTicksChildren.at(0)?.getData()
        const titleChildren: Array<HTMLApexYAxisTitleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-title') ?? []) as Array<HTMLApexYAxisTitleElement>
        this.title = await titleChildren.at(0)?.getData()
        const crosshairsChildren: Array<HTMLApexYAxisCrosshairsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-crosshairs') ?? []) as Array<HTMLApexYAxisCrosshairsElement>
        this.crosshairs = await crosshairsChildren.at(0)?.getData()
        const tooltipChildren: Array<HTMLApexYAxisTooltipElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-tooltip') ?? []) as Array<HTMLApexYAxisTooltipElement>
        this.tooltip = await tooltipChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexYAxis> {
        return {
        	show: this.show,
        	showAlways: this.showAlways,
        	showForNullSeries: this.showForNullSeries,
        	opposite: this.opposite,
        	reversed: this.reversed,
        	logarithmic: this.logarithmic,
        	logBase: this.logBase,
        	tickAmount: this.tickAmount,
        	stepSize: this.stepSize,
        	forceNiceScale: this.forceNiceScale,
        	floating: this.floating,
        	decimalsInFloat: this.decimalsInFloat,
        	seriesName: this.seriesName,
        	min: this.min,
        	max: this.max,
        	labels: this.labels,
        	axisBorder: this.axisBorder,
        	axisTicks: this.axisTicks,
        	title: this.title,
        	crosshairs: this.crosshairs,
        	tooltip: this.tooltip,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    showAlways?: boolean;
    @Prop()
    showForNullSeries?: boolean;
    @Prop()
    opposite?: boolean;
    @Prop()
    reversed?: boolean;
    @Prop()
    logarithmic?: boolean;
    @Prop()
    logBase?: number;
    @Prop()
    tickAmount?: number;
    @Prop()
    stepSize?: number;
    @Prop()
    forceNiceScale?: boolean;
    @Prop()
    floating?: boolean;
    @Prop()
    decimalsInFloat?: number;
    @Prop()
    seriesName?: string | string[];
    @Prop()
    min?: number | ((min: number) => number);
    @Prop()
    max?: number | ((max: number) => number);
    @Prop()
    labels?: { show?: boolean | undefined; showDuplicates?: boolean | undefined; minWidth?: number | undefined; maxWidth?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; rotate?: number | undefined; align?: "left" | "center" | "right" | undefined; padding?: number | undefined; style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontWeight?: string | number | undefined; fontFamily?: string | undefined; cssClass?: string | undefined; } | undefined; formatter?(val: number, opts?: any): string | string[]; };
    @Prop()
    axisBorder?: { show?: boolean | undefined; color?: string | undefined; width?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };
    @Prop()
    axisTicks?: { show?: boolean | undefined; color?: string | undefined; width?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };
    @Prop()
    title?: { text?: string | undefined; rotate?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; style?: { color?: string | undefined; fontSize?: string | undefined; fontWeight?: string | number | undefined; fontFamily?: string | undefined; cssClass?: string | undefined; } | undefined; };
    @Prop()
    crosshairs?: { show?: boolean | undefined; position?: string | undefined; stroke?: { color?: string | undefined; width?: number | undefined; dashArray?: number | undefined; } | undefined; };
    @Prop()
    tooltip?: { enabled?: boolean | undefined; offsetX?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
