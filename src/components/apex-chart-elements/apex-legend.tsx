import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-legend","shadow":true})
export class ApexLegend {
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
        const customLegendItemsChildren: Array<HTMLApexLegendCustomLegendItemsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-custom-legend-items-list') ?? []) as Array<HTMLApexLegendCustomLegendItemsListElement>
        this.customLegendItems = await customLegendItemsChildren.at(0)?.getData()
        const labelsChildren: Array<HTMLApexLegendLabelsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-labels') ?? []) as Array<HTMLApexLegendLabelsElement>
        this.labels = await labelsChildren.at(0)?.getData()
        const markersChildren: Array<HTMLApexLegendMarkersElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-markers') ?? []) as Array<HTMLApexLegendMarkersElement>
        this.markers = await markersChildren.at(0)?.getData()
        const itemMarginChildren: Array<HTMLApexLegendItemMarginElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-item-margin') ?? []) as Array<HTMLApexLegendItemMarginElement>
        this.itemMargin = await itemMarginChildren.at(0)?.getData()
        const onItemClickChildren: Array<HTMLApexLegendOnItemClickElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-on-item-click') ?? []) as Array<HTMLApexLegendOnItemClickElement>
        this.onItemClick = await onItemClickChildren.at(0)?.getData()
        const onItemHoverChildren: Array<HTMLApexLegendOnItemHoverElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-on-item-hover') ?? []) as Array<HTMLApexLegendOnItemHoverElement>
        this.onItemHover = await onItemHoverChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexLegend> {
        return {
        	show: this.show,
        	showForSingleSeries: this.showForSingleSeries,
        	showForNullSeries: this.showForNullSeries,
        	showForZeroSeries: this.showForZeroSeries,
        	floating: this.floating,
        	inverseOrder: this.inverseOrder,
        	position: this.position,
        	horizontalAlign: this.horizontalAlign,
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	width: this.width,
        	height: this.height,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	clusterGroupedSeries: this.clusterGroupedSeries,
        	clusterGroupedSeriesOrientation: this.clusterGroupedSeriesOrientation,
        	customLegendItems: this.customLegendItems,
        	labels: this.labels,
        	markers: this.markers,
        	itemMargin: this.itemMargin,
        	onItemClick: this.onItemClick,
        	onItemHover: this.onItemHover,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    showForSingleSeries?: boolean;
    @Prop()
    showForNullSeries?: boolean;
    @Prop()
    showForZeroSeries?: boolean;
    @Prop()
    floating?: boolean;
    @Prop()
    inverseOrder?: boolean;
    @Prop()
    position?: "top" | "right" | "bottom" | "left";
    @Prop()
    horizontalAlign?: "left" | "center" | "right";
    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    width?: number;
    @Prop()
    height?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    clusterGroupedSeries?: boolean;
    @Prop()
    clusterGroupedSeriesOrientation?: string;
    @Prop()
    customLegendItems?: string[];
    @Prop()
    labels?: { colors?: string | string[] | undefined; useSeriesColors?: boolean | undefined; };
    @Prop()
    markers?: { size?: number | undefined; strokeWidth?: number | undefined; fillColors?: string[] | undefined; shape?: ApexMarkerShape | undefined; offsetX?: number | undefined; offsetY?: number | undefined; customHTML?(): any; onClick?(): void; };
    @Prop()
    itemMargin?: { horizontal?: number | undefined; vertical?: number | undefined; };
    @Prop()
    onItemClick?: { toggleDataSeries?: boolean | undefined; };
    @Prop()
    onItemHover?: { highlightDataSeries?: boolean | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
