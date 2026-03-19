import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-tooltip","shadow":true})
export class ApexTooltip {
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
        const enabledOnSeriesChildren: Array<HTMLApexTooltipEnabledOnSeriesListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-enabled-on-series-list') ?? []) as Array<HTMLApexTooltipEnabledOnSeriesListElement>
        this.enabledOnSeries = await enabledOnSeriesChildren.at(0)?.getData()
        const customChildren: Array<HTMLApexTooltipCustom1Element> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-custom-1') ?? []) as Array<HTMLApexTooltipCustom1Element>
        this.custom = await customChildren.at(0)?.getData()
        const styleChildren: Array<HTMLApexTooltipStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-style') ?? []) as Array<HTMLApexTooltipStyleElement>
        this.style = await styleChildren.at(0)?.getData()
        const onDatasetHoverChildren: Array<HTMLApexTooltipOnDatasetHoverElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-on-dataset-hover') ?? []) as Array<HTMLApexTooltipOnDatasetHoverElement>
        this.onDatasetHover = await onDatasetHoverChildren.at(0)?.getData()
        const xChildren: Array<HTMLApexTooltipXElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-x') ?? []) as Array<HTMLApexTooltipXElement>
        this.x = await xChildren.at(0)?.getData()
        const yChildren: Array<HTMLApexTooltipYListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-y-list') ?? []) as Array<HTMLApexTooltipYListElement>
        this.y = await yChildren.at(0)?.getData()
        const zChildren: Array<HTMLApexTooltipZElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-z') ?? []) as Array<HTMLApexTooltipZElement>
        this.z = await zChildren.at(0)?.getData()
        const markerChildren: Array<HTMLApexTooltipMarkerElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-marker') ?? []) as Array<HTMLApexTooltipMarkerElement>
        this.marker = await markerChildren.at(0)?.getData()
        const itemsChildren: Array<HTMLApexTooltipItemsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-items') ?? []) as Array<HTMLApexTooltipItemsElement>
        this.items = await itemsChildren.at(0)?.getData()
        const fixedChildren: Array<HTMLApexTooltipFixedElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-fixed') ?? []) as Array<HTMLApexTooltipFixedElement>
        this.fixed = await fixedChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexTooltip> {
        return {
        	enabled: this.enabled,
        	shared: this.shared,
        	followCursor: this.followCursor,
        	intersect: this.intersect,
        	inverseOrder: this.inverseOrder,
        	fillSeriesColor: this.fillSeriesColor,
        	theme: this.theme,
        	cssClass: this.cssClass,
        	hideEmptySeries: this.hideEmptySeries,
        	enabledOnSeries: this.enabledOnSeries,
        	custom: this.custom,
        	style: this.style,
        	onDatasetHover: this.onDatasetHover,
        	x: this.x,
        	y: this.y,
        	z: this.z,
        	marker: this.marker,
        	items: this.items,
        	fixed: this.fixed,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    shared?: boolean;
    @Prop()
    followCursor?: boolean;
    @Prop()
    intersect?: boolean;
    @Prop()
    inverseOrder?: boolean;
    @Prop()
    fillSeriesColor?: boolean;
    @Prop()
    theme?: string;
    @Prop()
    cssClass?: string;
    @Prop()
    hideEmptySeries?: boolean;
    @Prop()
    enabledOnSeries?: number[] | undefined;
    @Prop()
    custom?: ((options: any) => any) | ((options: any) => any)[];
    @Prop()
    style?: { fontSize?: string | undefined; fontFamily?: string | undefined; };
    @Prop()
    onDatasetHover?: { highlightDataSeries?: boolean | undefined; };
    @Prop()
    x?: { show?: boolean | undefined; format?: string | undefined; formatter?(val: number, opts?: any): string; };
    @Prop()
    y?: ApexTooltipY | ApexTooltipY[];
    @Prop()
    z?: { title?: string | undefined; formatter?(val: number): string; };
    @Prop()
    marker?: { show?: boolean | undefined; fillColors?: string[] | undefined; };
    @Prop()
    items?: { display?: string | undefined; };
    @Prop()
    fixed?: { enabled?: boolean | undefined; position?: string | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
