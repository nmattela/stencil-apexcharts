import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-bar","shadow":true})
export class ApexPlotOptionsBar {
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
        const dumbbellColorsChildren: Array<HTMLApexPlotOptionsBarDumbbellColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-dumbbell-colors-list') ?? []) as Array<HTMLApexPlotOptionsBarDumbbellColorsListElement>
        this.dumbbellColors = await dumbbellColorsChildren.at(0)?.getData()
        const colorsChildren: Array<HTMLApexPlotOptionsBarColorsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-colors') ?? []) as Array<HTMLApexPlotOptionsBarColorsElement>
        this.colors = await colorsChildren.at(0)?.getData()
        const dataLabelsChildren: Array<HTMLApexPlotOptionsBarDataLabelsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-data-labels') ?? []) as Array<HTMLApexPlotOptionsBarDataLabelsElement>
        this.dataLabels = await dataLabelsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['bar'], undefined>> {
        return {
        	horizontal: this.horizontal,
        	columnWidth: this.columnWidth,
        	barHeight: this.barHeight,
        	distributed: this.distributed,
        	borderRadius: this.borderRadius,
        	borderRadiusApplication: this.borderRadiusApplication,
        	borderRadiusWhenStacked: this.borderRadiusWhenStacked,
        	hideZeroBarsWhenGrouped: this.hideZeroBarsWhenGrouped,
        	rangeBarOverlap: this.rangeBarOverlap,
        	rangeBarGroupRows: this.rangeBarGroupRows,
        	isDumbbell: this.isDumbbell,
        	isFunnel: this.isFunnel,
        	isFunnel3d: this.isFunnel3d,
        	dumbbellColors: this.dumbbellColors,
        	colors: this.colors,
        	dataLabels: this.dataLabels,
        }
    }

    @Prop()
    horizontal?: boolean;
    @Prop()
    columnWidth?: string | number;
    @Prop()
    barHeight?: string | number;
    @Prop()
    distributed?: boolean;
    @Prop()
    borderRadius?: number;
    @Prop()
    borderRadiusApplication?: "around" | "end";
    @Prop()
    borderRadiusWhenStacked?: "all" | "last";
    @Prop()
    hideZeroBarsWhenGrouped?: boolean;
    @Prop()
    rangeBarOverlap?: boolean;
    @Prop()
    rangeBarGroupRows?: boolean;
    @Prop()
    isDumbbell?: boolean;
    @Prop()
    isFunnel?: boolean;
    @Prop()
    isFunnel3d?: boolean;
    @Prop()
    dumbbellColors?: string[][];
    @Prop()
    colors?: { ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; }[] | undefined; backgroundBarColors?: string[] | undefined; backgroundBarOpacity?: number | undefined; backgroundBarRadius?: number | undefined; };
    @Prop()
    dataLabels?: { maxItems?: number | undefined; hideOverflowingLabels?: boolean | undefined; position?: string | undefined; orientation?: "horizontal" | "vertical" | undefined; total?: { enabled?: boolean | undefined; formatter?(val?: string | undefined, opts?: any): string; offsetX?: number | undefined; offsetY?: number | undefined; style?: { color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; } | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
