import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart","shadow":true})
export class ApexChart {
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
        const dropShadowChildren: Array<HTMLApexChartDropShadowElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-drop-shadow') ?? []) as Array<HTMLApexChartDropShadowElement>
        this.dropShadow = await dropShadowChildren.at(0)?.getData()
        const eventsChildren: Array<HTMLApexChartEventsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-events') ?? []) as Array<HTMLApexChartEventsElement>
        this.events = await eventsChildren.at(0)?.getData()
        const brushChildren: Array<HTMLApexChartBrushElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-brush') ?? []) as Array<HTMLApexChartBrushElement>
        this.brush = await brushChildren.at(0)?.getData()
        const localesChildren: Array<HTMLApexChartLocalesListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-locales-list') ?? []) as Array<HTMLApexChartLocalesListElement>
        this.locales = await localesChildren.at(0)?.getData()
        const sparklineChildren: Array<HTMLApexChartSparklineElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-sparkline') ?? []) as Array<HTMLApexChartSparklineElement>
        this.sparkline = await sparklineChildren.at(0)?.getData()
        const toolbarChildren: Array<HTMLApexChartToolbarElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar') ?? []) as Array<HTMLApexChartToolbarElement>
        this.toolbar = await toolbarChildren.at(0)?.getData()
        const zoomChildren: Array<HTMLApexChartZoomElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-zoom') ?? []) as Array<HTMLApexChartZoomElement>
        this.zoom = await zoomChildren.at(0)?.getData()
        const selectionChildren: Array<HTMLApexChartSelectionElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection') ?? []) as Array<HTMLApexChartSelectionElement>
        this.selection = await selectionChildren.at(0)?.getData()
        const animationsChildren: Array<HTMLApexChartAnimationsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-animations') ?? []) as Array<HTMLApexChartAnimationsElement>
        this.animations = await animationsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexChart> {
        return {
        	width: this.width,
        	height: this.height,
        	type: this.type,
        	foreColor: this.foreColor,
        	fontFamily: this.fontFamily,
        	background: this.background,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	nonce: this.nonce,
        	id: this.id,
        	injectStyleSheet: this.injectStyleSheet,
        	group: this.group,
        	defaultLocale: this.defaultLocale,
        	parentHeightOffset: this.parentHeightOffset,
        	redrawOnParentResize: this.redrawOnParentResize,
        	redrawOnWindowResize: this.redrawOnWindowResize,
        	stacked: this.stacked,
        	stackType: this.stackType,
        	stackOnlyBar: this.stackOnlyBar,
        	dropShadow: this.dropShadow as globalThis.ApexChart['dropShadow'],
        	events: this.events,
        	brush: this.brush,
        	locales: this.locales,
        	sparkline: this.sparkline,
        	toolbar: this.toolbar,
        	zoom: this.zoom,
        	selection: this.selection,
        	animations: this.animations,
        }
    }

    @Prop()
    width?: string | number;
    @Prop()
    height?: string | number;
    @Prop()
    type?: "line" | "area" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap";
    @Prop()
    foreColor?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    background?: string;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    nonce?: string;
    @Prop()
    id?: string;
    @Prop()
    injectStyleSheet?: boolean;
    @Prop()
    group?: string;
    @Prop()
    defaultLocale?: string;
    @Prop()
    parentHeightOffset?: number;
    @Prop()
    redrawOnParentResize?: boolean;
    @Prop()
    redrawOnWindowResize?: boolean | Function;
    @Prop()
    stacked?: boolean;
    @Prop()
    stackType?: "normal" | "100%";
    @Prop()
    stackOnlyBar?: boolean;
    @Prop()
    dropShadow?: Omit<ApexDropShadow & { enabledOnSeries?: number[] | undefined; color?: string | string[] | undefined; }, 'color'> & { color?: string | string[] };
    @Prop()
    events?: { animationEnd?(chart: any, options?: any): void; beforeMount?(chart: any, options?: any): void; mounted?(chart: any, options?: any): void; updated?(chart: any, options?: any): void; mouseMove?(e: any, chart?: any, options?: any): void; mouseLeave?(e: any, chart?: any, options?: any): void; click?(e: any, chart?: any, options?: any): void; xAxisLabelClick?(e: any, chart?: any, options?: any): void; legendClick?(chart: any, seriesIndex?: number | undefined, options?: any): void; markerClick?(e: any, chart?: any, options?: any): void; selection?(chart: any, options?: any): void; dataPointSelection?(e: any, chart?: any, options?: any): void; dataPointMouseEnter?(e: any, chart?: any, options?: any): void; dataPointMouseLeave?(e: any, chart?: any, options?: any): void; beforeZoom?(chart: any, options?: any): void; beforeResetZoom?(chart: any, options?: any): void; zoomed?(chart: any, options?: any): void; scrolled?(chart: any, options?: any): void; brushScrolled?(chart: any, options?: any): void; };
    @Prop()
    brush?: { enabled?: boolean | undefined; autoScaleYaxis?: boolean | undefined; target?: string | undefined; targets?: string[] | undefined; };
    @Prop()
    locales?: ApexLocale[];
    @Prop()
    sparkline?: { enabled?: boolean | undefined; };
    @Prop()
    toolbar?: { show?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; tools?: { download?: string | boolean | undefined; selection?: string | boolean | undefined; zoom?: string | boolean | undefined; zoomin?: string | boolean | undefined; zoomout?: string | boolean | undefined; pan?: string | boolean | undefined; reset?: string | boolean | undefined; customIcons?: { icon?: string | undefined; title?: string | undefined; index?: number | undefined; class?: string | undefined; click?(chart?: any, options?: any, e?: any): any; }[] | undefined; } | undefined; export?: { csv?: { filename?: string | undefined; columnDelimiter?: string | undefined; headerCategory?: string | undefined; headerValue?: string | undefined; categoryFormatter?(value?: number | undefined): any; valueFormatter?(value?: number | undefined): any; } | undefined; svg?: { filename?: string | undefined; } | undefined; png?: { filename?: string | undefined; } | undefined; width?: number | undefined; scale?: number | undefined; } | undefined; autoSelected?: "zoom" | "selection" | "pan" | undefined; };
    @Prop()
    zoom?: { enabled?: boolean | undefined; type?: "x" | "y" | "xy" | undefined; autoScaleYaxis?: boolean | undefined; allowMouseWheelZoom?: boolean | undefined; zoomedArea?: { fill?: { color?: string | undefined; opacity?: number | undefined; } | undefined; stroke?: { color?: string | undefined; opacity?: number | undefined; width?: number | undefined; } | undefined; } | undefined; };
    @Prop()
    selection?: { enabled?: boolean | undefined; type?: string | undefined; fill?: { color?: string | undefined; opacity?: number | undefined; } | undefined; stroke?: { width?: number | undefined; color?: string | undefined; opacity?: number | undefined; dashArray?: number | undefined; } | undefined; xaxis?: { min?: number | undefined; max?: number | undefined; } | undefined; yaxis?: { min?: number | undefined; max?: number | undefined; } | undefined; };
    @Prop()
    animations?: { enabled?: boolean | undefined; speed?: number | undefined; animateGradually?: { enabled?: boolean | undefined; delay?: number | undefined; } | undefined; dynamicAnimation?: { enabled?: boolean | undefined; speed?: number | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
