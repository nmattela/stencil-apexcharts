import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Element, h } from "@stencil/core";

@Component({"tag":"apex-options","shadow":true})
class ApexOptions {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-options-colors-list') ?? []
        this.colors = colorsChildren.map(el => (el as any).getData())
        const labelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-options-labels-list') ?? []
        this.labels = labelsChildren.map(el => (el as any).getData())
        const responsiveChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-options-responsive-list') ?? []
        this.responsive = responsiveChildren.map(el => (el as any).getData())
        const yaxisChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-options-yaxis-list') ?? []
        this.yaxis = (yaxisChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<ApexChartsApexOptions> {
        return {
        	series: this.series,
        }
    }

    @Prop()
    series?: ApexNonAxisChartSeries;
    @Prop()
    annotations?: ApexAnnotations;
    @Prop()
    chart?: ApexChart;
    @Prop()
    colors?: any[];
    @Prop()
    dataLabels?: ApexDataLabels;
    @Prop()
    fill?: ApexFill;
    @Prop()
    forecastDataPoints?: ApexForecastDataPoints;
    @Prop()
    grid?: ApexGrid;
    @Prop()
    labels?: string[];
    @Prop()
    legend?: ApexLegend;
    @Prop()
    markers?: ApexMarkers;
    @Prop()
    noData?: ApexNoData;
    @Prop()
    plotOptions?: ApexPlotOptions;
    @Prop()
    responsive?: ApexResponsive[];
    @Prop()
    parsing?: ApexParsing;
    @Prop()
    states?: ApexStates;
    @Prop()
    stroke?: ApexStroke;
    @Prop()
    subtitle?: ApexTitleSubtitle;
    @Prop()
    theme?: ApexTheme;
    @Prop()
    title?: ApexTitleSubtitle;
    @Prop()
    tooltip?: ApexTooltip;
    @Prop()
    xaxis?: ApexXAxis;
    @Prop()
    yaxis?: ApexYAxis | ApexYAxis[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-options-colors-list","shadow":true})
class ApexOptionsColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['colors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<any> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-options-colors-item","shadow":true})
class ApexOptionsColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['colors'], undefined>[0]> {
        return this.element.innerText as any
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-options-labels-list","shadow":true})
class ApexOptionsLabelsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['labels'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-options-labels-item","shadow":true})
class ApexOptionsLabelsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['labels'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-options-responsive-list","shadow":true})
class ApexOptionsResponsiveList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['responsive'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<ApexResponsive> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-options-yaxis-list","shadow":true})
class ApexOptionsYaxisList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<ApexChartsApexOptions['yaxis'], undefined>, ApexYAxis[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<ApexYAxis> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-drop-shadow","shadow":true})
class ApexDropShadow {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<globalThis.ApexDropShadow> {
        return {
        	enabled: this.enabled,
        	top: this.top,
        	left: this.left,
        	blur: this.blur,
        	opacity: this.opacity,
        	color: this.color,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    top?: number;
    @Prop()
    left?: number;
    @Prop()
    blur?: number;
    @Prop()
    opacity?: number;
    @Prop()
    color?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart","shadow":true})
class ApexChart {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const dropShadowChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-drop-shadow') ?? []
        this.dropShadow = (dropShadowChildren.at(0) as any)?.getData()
        const eventsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-events') ?? []
        this.events = (eventsChildren.at(0) as any)?.getData()
        const brushChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-brush') ?? []
        this.brush = (brushChildren.at(0) as any)?.getData()
        const localesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-locales-list') ?? []
        this.locales = localesChildren.map(el => (el as any).getData())
        const sparklineChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-sparkline') ?? []
        this.sparkline = (sparklineChildren.at(0) as any)?.getData()
        const toolbarChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar') ?? []
        this.toolbar = (toolbarChildren.at(0) as any)?.getData()
        const zoomChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-zoom') ?? []
        this.zoom = (zoomChildren.at(0) as any)?.getData()
        const selectionChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection') ?? []
        this.selection = (selectionChildren.at(0) as any)?.getData()
        const animationsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-animations') ?? []
        this.animations = (animationsChildren.at(0) as any)?.getData()
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
    dropShadow?: ApexDropShadow & { enabledOnSeries?: number[] | undefined; color?: string | string[] | undefined; };
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

@Component({"tag":"apex-chart-drop-shadow","shadow":true})
class ApexChartDropShadow {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const enabledOnSeriesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-drop-shadow-enabled-on-series-list') ?? []
        this.enabledOnSeries = (enabledOnSeriesChildren.at(0) as any)?.getData()
        const colorChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-drop-shadow-color-list') ?? []
        this.color = (colorChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['dropShadow'], undefined>> {
        return {
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

@Component({"tag":"apex-chart-drop-shadow-enabled-on-series-list","shadow":true})
class ApexChartDropShadowEnabledOnSeriesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['enabledOnSeries'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-drop-shadow-enabled-on-series-item","shadow":true})
class ApexChartDropShadowEnabledOnSeriesItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['enabledOnSeries'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-drop-shadow-color-list","shadow":true})
class ApexChartDropShadowColorList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['color'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-drop-shadow-color-item","shadow":true})
class ApexChartDropShadowColorItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['color'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-events","shadow":true})
class ApexChartEvents {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['events'], undefined>> {
        return {
        }
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-brush","shadow":true})
class ApexChartBrush {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const targetsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-brush-targets-list') ?? []
        this.targets = targetsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['brush'], undefined>> {
        return {
        	enabled: this.enabled,
        	autoScaleYaxis: this.autoScaleYaxis,
        	target: this.target,
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

@Component({"tag":"apex-chart-brush-targets-list","shadow":true})
class ApexChartBrushTargetsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['brush'], undefined>['targets'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-brush-targets-item","shadow":true})
class ApexChartBrushTargetsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['brush'], undefined>['targets'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-locales-list","shadow":true})
class ApexChartLocalesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['locales'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<ApexLocale> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-sparkline","shadow":true})
class ApexChartSparkline {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['sparkline'], undefined>> {
        return {
        	enabled: this.enabled,
        }
    }

    @Prop()
    enabled?: boolean;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-toolbar","shadow":true})
class ApexChartToolbar {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const toolsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-tools') ?? []
        this.tools = (toolsChildren.at(0) as any)?.getData()
        const exportChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-export') ?? []
        this.export = (exportChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['toolbar'], undefined>> {
        return {
        	show: this.show,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	autoSelected: this.autoSelected,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    autoSelected?: "zoom" | "selection" | "pan";
    @Prop()
    tools?: { download?: string | boolean | undefined; selection?: string | boolean | undefined; zoom?: string | boolean | undefined; zoomin?: string | boolean | undefined; zoomout?: string | boolean | undefined; pan?: string | boolean | undefined; reset?: string | boolean | undefined; customIcons?: { icon?: string | undefined; title?: string | undefined; index?: number | undefined; class?: string | undefined; click?(chart?: any, options?: any, e?: any): any; }[] | undefined; };
    @Prop()
    export?: { csv?: { filename?: string | undefined; columnDelimiter?: string | undefined; headerCategory?: string | undefined; headerValue?: string | undefined; categoryFormatter?(value?: number | undefined): any; valueFormatter?(value?: number | undefined): any; } | undefined; svg?: { filename?: string | undefined; } | undefined; png?: { filename?: string | undefined; } | undefined; width?: number | undefined; scale?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-toolbar-tools","shadow":true})
class ApexChartToolbarTools {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const customIconsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-tools-custom-icons-list') ?? []
        this.customIcons = customIconsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>> {
        return {
        	download: this.download,
        	selection: this.selection,
        	zoom: this.zoom,
        	zoomin: this.zoomin,
        	zoomout: this.zoomout,
        	pan: this.pan,
        	reset: this.reset,
        }
    }

    @Prop()
    download?: string | boolean;
    @Prop()
    selection?: string | boolean;
    @Prop()
    zoom?: string | boolean;
    @Prop()
    zoomin?: string | boolean;
    @Prop()
    zoomout?: string | boolean;
    @Prop()
    pan?: string | boolean;
    @Prop()
    reset?: string | boolean;
    @Prop()
    customIcons?: { icon?: string | undefined; title?: string | undefined; index?: number | undefined; class?: string | undefined; click?(chart?: any, options?: any, e?: any): any; }[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-toolbar-tools-custom-icons-list","shadow":true})
class ApexChartToolbarToolsCustomIconsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>['customIcons'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
                icon?: string
                title?: string
                index?: number
                class?: string
                click?(chart?: any, options?: any, e?: any): any
              }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-toolbar-tools-custom-icons-item","shadow":true})
class ApexChartToolbarToolsCustomIconsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>['customIcons'], undefined>[0]> {
        return {
        	icon: this.icon,
        	title: this.title,
        	index: this.index,
        	class: this.class,
        }
    }

    @Prop()
    icon?: string;
    @Prop()
    title?: string;
    @Prop()
    index?: number;
    @Prop()
    class?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-toolbar-export","shadow":true})
class ApexChartToolbarExport {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const csvChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-export-csv') ?? []
        this.csv = (csvChildren.at(0) as any)?.getData()
        const svgChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-export-svg') ?? []
        this.svg = (svgChildren.at(0) as any)?.getData()
        const pngChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-toolbar-export-png') ?? []
        this.png = (pngChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>> {
        return {
        	width: this.width,
        	scale: this.scale,
        }
    }

    @Prop()
    width?: number;
    @Prop()
    scale?: number;
    @Prop()
    csv?: { filename?: string | undefined; columnDelimiter?: string | undefined; headerCategory?: string | undefined; headerValue?: string | undefined; categoryFormatter?(value?: number | undefined): any; valueFormatter?(value?: number | undefined): any; };
    @Prop()
    svg?: { filename?: string | undefined; };
    @Prop()
    png?: { filename?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-toolbar-export-csv","shadow":true})
class ApexChartToolbarExportCsv {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>['csv'], undefined>> {
        return {
        	filename: this.filename,
        	columnDelimiter: this.columnDelimiter,
        	headerCategory: this.headerCategory,
        	headerValue: this.headerValue,
        }
    }

    @Prop()
    filename?: string | undefined;
    @Prop()
    columnDelimiter?: string;
    @Prop()
    headerCategory?: string;
    @Prop()
    headerValue?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-toolbar-export-svg","shadow":true})
class ApexChartToolbarExportSvg {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>['svg'], undefined>> {
        return {
        	filename: this.filename,
        }
    }

    @Prop()
    filename?: string | undefined;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-toolbar-export-png","shadow":true})
class ApexChartToolbarExportPng {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>['png'], undefined>> {
        return {
        	filename: this.filename,
        }
    }

    @Prop()
    filename?: string | undefined;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-zoom","shadow":true})
class ApexChartZoom {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const zoomedAreaChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-zoom-zoomed-area') ?? []
        this.zoomedArea = (zoomedAreaChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['zoom'], undefined>> {
        return {
        	enabled: this.enabled,
        	type: this.type,
        	autoScaleYaxis: this.autoScaleYaxis,
        	allowMouseWheelZoom: this.allowMouseWheelZoom,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    type?: "x" | "y" | "xy";
    @Prop()
    autoScaleYaxis?: boolean;
    @Prop()
    allowMouseWheelZoom?: boolean;
    @Prop()
    zoomedArea?: { fill?: { color?: string | undefined; opacity?: number | undefined; } | undefined; stroke?: { color?: string | undefined; opacity?: number | undefined; width?: number | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-zoom-zoomed-area","shadow":true})
class ApexChartZoomZoomedArea {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const fillChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-zoom-zoomed-area-fill') ?? []
        this.fill = (fillChildren.at(0) as any)?.getData()
        const strokeChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-zoom-zoomed-area-stroke') ?? []
        this.stroke = (strokeChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>> {
        return {
        }
    }

    @Prop()
    fill?: { color?: string | undefined; opacity?: number | undefined; };
    @Prop()
    stroke?: { color?: string | undefined; opacity?: number | undefined; width?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-zoom-zoomed-area-fill","shadow":true})
class ApexChartZoomZoomedAreaFill {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>['fill'], undefined>> {
        return {
        	color: this.color,
        	opacity: this.opacity,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    opacity?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-zoom-zoomed-area-stroke","shadow":true})
class ApexChartZoomZoomedAreaStroke {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>['stroke'], undefined>> {
        return {
        	color: this.color,
        	opacity: this.opacity,
        	width: this.width,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    opacity?: number;
    @Prop()
    width?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-selection","shadow":true})
class ApexChartSelection {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const fillChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection-fill') ?? []
        this.fill = (fillChildren.at(0) as any)?.getData()
        const strokeChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection-stroke') ?? []
        this.stroke = (strokeChildren.at(0) as any)?.getData()
        const xaxisChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection-xaxis') ?? []
        this.xaxis = (xaxisChildren.at(0) as any)?.getData()
        const yaxisChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-selection-yaxis') ?? []
        this.yaxis = (yaxisChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['selection'], undefined>> {
        return {
        	enabled: this.enabled,
        	type: this.type,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    type?: string;
    @Prop()
    fill?: { color?: string | undefined; opacity?: number | undefined; };
    @Prop()
    stroke?: { width?: number | undefined; color?: string | undefined; opacity?: number | undefined; dashArray?: number | undefined; };
    @Prop()
    xaxis?: { min?: number | undefined; max?: number | undefined; };
    @Prop()
    yaxis?: { min?: number | undefined; max?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-selection-fill","shadow":true})
class ApexChartSelectionFill {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['fill'], undefined>> {
        return {
        	color: this.color,
        	opacity: this.opacity,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    opacity?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-selection-stroke","shadow":true})
class ApexChartSelectionStroke {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['stroke'], undefined>> {
        return {
        	width: this.width,
        	color: this.color,
        	opacity: this.opacity,
        	dashArray: this.dashArray,
        }
    }

    @Prop()
    width?: number;
    @Prop()
    color?: string;
    @Prop()
    opacity?: number;
    @Prop()
    dashArray?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-selection-xaxis","shadow":true})
class ApexChartSelectionXaxis {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['xaxis'], undefined>> {
        return {
        	min: this.min,
        	max: this.max,
        }
    }

    @Prop()
    min?: number;
    @Prop()
    max?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-selection-yaxis","shadow":true})
class ApexChartSelectionYaxis {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['yaxis'], undefined>> {
        return {
        	min: this.min,
        	max: this.max,
        }
    }

    @Prop()
    min?: number;
    @Prop()
    max?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-animations","shadow":true})
class ApexChartAnimations {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const animateGraduallyChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-animations-animate-gradually') ?? []
        this.animateGradually = (animateGraduallyChildren.at(0) as any)?.getData()
        const dynamicAnimationChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-animations-dynamic-animation') ?? []
        this.dynamicAnimation = (dynamicAnimationChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['animations'], undefined>> {
        return {
        	enabled: this.enabled,
        	speed: this.speed,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    speed?: number;
    @Prop()
    animateGradually?: { enabled?: boolean | undefined; delay?: number | undefined; };
    @Prop()
    dynamicAnimation?: { enabled?: boolean | undefined; speed?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-animations-animate-gradually","shadow":true})
class ApexChartAnimationsAnimateGradually {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['animations'], undefined>['animateGradually'], undefined>> {
        return {
        	enabled: this.enabled,
        	delay: this.delay,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    delay?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-chart-animations-dynamic-animation","shadow":true})
class ApexChartAnimationsDynamicAnimation {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['animations'], undefined>['dynamicAnimation'], undefined>> {
        return {
        	enabled: this.enabled,
        	speed: this.speed,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    speed?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-states","shadow":true})
class ApexStates {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const hoverChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-states-hover') ?? []
        this.hover = (hoverChildren.at(0) as any)?.getData()
        const activeChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-states-active') ?? []
        this.active = (activeChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexStates> {
        return {
        }
    }

    @Prop()
    hover?: { filter?: { type?: string | undefined; } | undefined; };
    @Prop()
    active?: { allowMultipleDataPointsSelection?: boolean | undefined; filter?: { type?: string | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-states-hover","shadow":true})
class ApexStatesHover {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const filterChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-states-hover-filter') ?? []
        this.filter = (filterChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexStates['hover'], undefined>> {
        return {
        }
    }

    @Prop()
    filter?: { type?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-states-hover-filter","shadow":true})
class ApexStatesHoverFilter {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexStates['hover'], undefined>['filter'], undefined>> {
        return {
        	type: this.type,
        }
    }

    @Prop()
    type?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-states-active","shadow":true})
class ApexStatesActive {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const filterChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-states-active-filter') ?? []
        this.filter = (filterChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexStates['active'], undefined>> {
        return {
        	allowMultipleDataPointsSelection: this.allowMultipleDataPointsSelection,
        }
    }

    @Prop()
    allowMultipleDataPointsSelection?: boolean;
    @Prop()
    filter?: { type?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-states-active-filter","shadow":true})
class ApexStatesActiveFilter {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexStates['active'], undefined>['filter'], undefined>> {
        return {
        	type: this.type,
        }
    }

    @Prop()
    type?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-title-subtitle","shadow":true})
class ApexTitleSubtitle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-title-subtitle-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexTitleSubtitle> {
        return {
        	text: this.text,
        	align: this.align,
        	margin: this.margin,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	floating: this.floating,
        }
    }

    @Prop()
    text?: string;
    @Prop()
    align?: "left" | "center" | "right";
    @Prop()
    margin?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    floating?: boolean;
    @Prop()
    style?: { fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-title-subtitle-style","shadow":true})
class ApexTitleSubtitleStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTitleSubtitle['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	color: this.color,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    color?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-list","shadow":true})
class ApexAxisChartSeriesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<globalThis.ApexAxisChartSeries> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
         name?: string
         type?: string
         color?: string
         group?: string
         hidden?: boolean
         zIndex?: number
         parsing?: ApexParsing;
         data:
         | (number | null)[]
         | {
           x: any;
           y: any;
           fill?: ApexFill;
           fillColor?: string;
           strokeColor?: string;
           meta?: any;
           goals?: {
             name?: string,
             value: number,
             strokeHeight?: number;
             strokeWidth?: number;
             strokeColor?: string;
             strokeDashArray?: number;
             strokeLineCap?: 'butt' | 'square' | 'round'
           }[];
           barHeightOffset?: number;
           columnWidthOffset?: number;
         }[]
         | [number, number | null][]
         | [number, (number | null)[]][]
         | number[][]
         | Record<string, any>[];
        }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item","shadow":true})
class ApexAxisChartSeriesItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const dataChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-axis-chart-series-item-data-1-list') ?? []
        this.data = (dataChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexAxisChartSeries[0]> {
        return {
        	name: this.name,
        	type: this.type,
        	color: this.color,
        	group: this.group,
        	hidden: this.hidden,
        	zIndex: this.zIndex,
        }
    }

    @Prop()
    name?: string;
    @Prop()
    type?: string;
    @Prop()
    color?: string;
    @Prop()
    group?: string;
    @Prop()
    hidden?: boolean;
    @Prop()
    zIndex?: number;
    @Prop()
    parsing?: ApexParsing;
    @Prop()
    data: (number | null)[] | { x: any; y: any; fill?: ApexFill | undefined; fillColor?: string | undefined; strokeColor?: string | undefined; meta?: any; goals?: { name?: string | undefined; value: number; strokeHeight?: number | undefined; strokeWidth?: number | undefined; strokeColor?: string | undefined; strokeDashArray?: number | undefined; strokeLineCap?: "butt" | "square" | "round" | undefined; }[] | undefined; barHeightOffset?: number | undefined; columnWidthOffset?: number | undefined; }[] | [number, number | null][] | [number, (number | null)[]][] | number[][] | Record<string, any>[] = undefined;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-1-list","shadow":true})
class ApexAxisChartSeriesItemData1List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, (number | null)[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<(number | null)> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-2-list","shadow":true})
class ApexAxisChartSeriesItemData2List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
           x: any;
           y: any;
           fill?: ApexFill;
           fillColor?: string;
           strokeColor?: string;
           meta?: any;
           goals?: {
             name?: string,
             value: number,
             strokeHeight?: number;
             strokeWidth?: number;
             strokeColor?: string;
             strokeDashArray?: number;
             strokeLineCap?: 'butt' | 'square' | 'round'
           }[];
           barHeightOffset?: number;
           columnWidthOffset?: number;
         }[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
           x: any;
           y: any;
           fill?: ApexFill;
           fillColor?: string;
           strokeColor?: string;
           meta?: any;
           goals?: {
             name?: string,
             value: number,
             strokeHeight?: number;
             strokeWidth?: number;
             strokeColor?: string;
             strokeDashArray?: number;
             strokeLineCap?: 'butt' | 'square' | 'round'
           }[];
           barHeightOffset?: number;
           columnWidthOffset?: number;
         }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-2-item","shadow":true})
class ApexAxisChartSeriesItemData2Item {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const goalsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-axis-chart-series-item-data-2-item-goals-list') ?? []
        this.goals = goalsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
           x: any;
           y: any;
           fill?: ApexFill;
           fillColor?: string;
           strokeColor?: string;
           meta?: any;
           goals?: {
             name?: string,
             value: number,
             strokeHeight?: number;
             strokeWidth?: number;
             strokeColor?: string;
             strokeDashArray?: number;
             strokeLineCap?: 'butt' | 'square' | 'round'
           }[];
           barHeightOffset?: number;
           columnWidthOffset?: number;
         }[]>[0]> {
        return {
        	x: this.x,
        	y: this.y,
        	fillColor: this.fillColor,
        	strokeColor: this.strokeColor,
        	meta: this.meta,
        	barHeightOffset: this.barHeightOffset,
        	columnWidthOffset: this.columnWidthOffset,
        }
    }

    @Prop()
    x: any = null;
    @Prop()
    y: any = null;
    @Prop()
    fillColor?: string;
    @Prop()
    strokeColor?: string;
    @Prop()
    meta?: any;
    @Prop()
    barHeightOffset?: number;
    @Prop()
    columnWidthOffset?: number;
    @Prop()
    fill?: ApexFill;
    @Prop()
    goals?: { name?: string | undefined; value: number; strokeHeight?: number | undefined; strokeWidth?: number | undefined; strokeColor?: string | undefined; strokeDashArray?: number | undefined; strokeLineCap?: "butt" | "square" | "round" | undefined; }[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-2-item-goals-list","shadow":true})
class ApexAxisChartSeriesItemData2ItemGoalsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
           x: any;
           y: any;
           fill?: ApexFill;
           fillColor?: string;
           strokeColor?: string;
           meta?: any;
           goals?: {
             name?: string,
             value: number,
             strokeHeight?: number;
             strokeWidth?: number;
             strokeColor?: string;
             strokeDashArray?: number;
             strokeLineCap?: 'butt' | 'square' | 'round'
           }[];
           barHeightOffset?: number;
           columnWidthOffset?: number;
         }[]>[0]['goals'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
             name?: string,
             value: number,
             strokeHeight?: number;
             strokeWidth?: number;
             strokeColor?: string;
             strokeDashArray?: number;
             strokeLineCap?: 'butt' | 'square' | 'round'
           }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-2-item-goals-item","shadow":true})
class ApexAxisChartSeriesItemData2ItemGoalsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
           x: any;
           y: any;
           fill?: ApexFill;
           fillColor?: string;
           strokeColor?: string;
           meta?: any;
           goals?: {
             name?: string,
             value: number,
             strokeHeight?: number;
             strokeWidth?: number;
             strokeColor?: string;
             strokeDashArray?: number;
             strokeLineCap?: 'butt' | 'square' | 'round'
           }[];
           barHeightOffset?: number;
           columnWidthOffset?: number;
         }[]>[0]['goals'], undefined>[0]> {
        return {
        	name: this.name,
        	value: this.value,
        	strokeHeight: this.strokeHeight,
        	strokeWidth: this.strokeWidth,
        	strokeColor: this.strokeColor,
        	strokeDashArray: this.strokeDashArray,
        	strokeLineCap: this.strokeLineCap,
        }
    }

    @Prop()
    name?: string;
    @Prop()
    value: number = 0;
    @Prop()
    strokeHeight?: number;
    @Prop()
    strokeWidth?: number;
    @Prop()
    strokeColor?: string;
    @Prop()
    strokeDashArray?: number;
    @Prop()
    strokeLineCap?: "butt" | "square" | "round";

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-3-list","shadow":true})
class ApexAxisChartSeriesItemData3List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, [number, number | null][]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<[number, number | null]> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-4-list","shadow":true})
class ApexAxisChartSeriesItemData4List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, [number, (number | null)[]][]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<[number, (number | null)[]]> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-5-list","shadow":true})
class ApexAxisChartSeriesItemData5List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, number[][]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number[]> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-5-item-list","shadow":true})
class ApexAxisChartSeriesItemData5ItemList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, number[][]>[0]> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-5-item-item","shadow":true})
class ApexAxisChartSeriesItemData5ItemItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, number[][]>[0][0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-6-list","shadow":true})
class ApexAxisChartSeriesItemData6List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, Record<string, any>[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<Record<string, any>> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-non-axis-chart-series-list","shadow":true})
class ApexNonAxisChartSeriesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<globalThis.ApexNonAxisChartSeries, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-non-axis-chart-series-item","shadow":true})
class ApexNonAxisChartSeriesItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<globalThis.ApexNonAxisChartSeries, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke","shadow":true})
class ApexStroke {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const curveChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-curve-list') ?? []
        this.curve = (curveChildren.at(0) as any)?.getData()
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-colors-1-list') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
        const widthChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-width-list') ?? []
        this.width = (widthChildren.at(0) as any)?.getData()
        const dashArrayChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-dash-array-list') ?? []
        this.dashArray = (dashArrayChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexStroke> {
        return {
        	show: this.show,
        	lineCap: this.lineCap,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    lineCap?: "butt" | "square" | "round";
    @Prop()
    curve?: "smooth" | "straight" | "stepline" | "linestep" | "monotoneCubic" | ("smooth" | "straight" | "stepline" | "linestep" | "monotoneCubic")[];
    @Prop()
    colors?: any[] | string[];
    @Prop()
    width?: number | number[];
    @Prop()
    dashArray?: number | number[];
    @Prop()
    fill?: ApexFill;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke-curve-list","shadow":true})
class ApexStrokeCurveList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['curve'], undefined>, ('smooth' | 'straight' | 'stepline' | 'linestep' | 'monotoneCubic')[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<('smooth' | 'straight' | 'stepline' | 'linestep' | 'monotoneCubic')> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke-colors-1-list","shadow":true})
class ApexStrokeColors1List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, any[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<any> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke-colors-1-item","shadow":true})
class ApexStrokeColors1Item {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, any[]>[0]> {
        return this.element.innerText as any
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke-colors-2-list","shadow":true})
class ApexStrokeColors2List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke-colors-2-item","shadow":true})
class ApexStrokeColors2Item {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke-width-list","shadow":true})
class ApexStrokeWidthList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['width'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke-width-item","shadow":true})
class ApexStrokeWidthItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['width'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke-dash-array-list","shadow":true})
class ApexStrokeDashArrayList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['dashArray'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-stroke-dash-array-item","shadow":true})
class ApexStrokeDashArrayItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['dashArray'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-annotations","shadow":true})
class ApexAnnotations {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const yaxisChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-yaxis-list') ?? []
        this.yaxis = yaxisChildren.map(el => (el as any).getData())
        const xaxisChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-xaxis-list') ?? []
        this.xaxis = xaxisChildren.map(el => (el as any).getData())
        const pointsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-points-list') ?? []
        this.points = pointsChildren.map(el => (el as any).getData())
        const textsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-texts-list') ?? []
        this.texts = textsChildren.map(el => (el as any).getData())
        const imagesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-images-list') ?? []
        this.images = imagesChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<globalThis.ApexAnnotations> {
        return {
        }
    }

    @Prop()
    yaxis?: YAxisAnnotations[];
    @Prop()
    xaxis?: XAxisAnnotations[];
    @Prop()
    points?: PointAnnotations[];
    @Prop()
    texts?: TextAnnotations[];
    @Prop()
    images?: ImageAnnotations[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-annotations-yaxis-list","shadow":true})
class ApexAnnotationsYaxisList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['yaxis'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<YAxisAnnotations> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-annotations-xaxis-list","shadow":true})
class ApexAnnotationsXaxisList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['xaxis'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<XAxisAnnotations> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-annotations-points-list","shadow":true})
class ApexAnnotationsPointsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['points'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<PointAnnotations> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-annotations-texts-list","shadow":true})
class ApexAnnotationsTextsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['texts'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<TextAnnotations> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-annotations-images-list","shadow":true})
class ApexAnnotationsImagesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['images'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<ImageAnnotations> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"annotation-label","shadow":true})
class AnnotationLabel {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const textChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'annotation-label-text-list') ?? []
        this.text = (textChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.AnnotationLabel> {
        return {
        	borderColor: this.borderColor,
        	borderWidth: this.borderWidth,
        	borderRadius: this.borderRadius,
        	textAnchor: this.textAnchor,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	position: this.position,
        	orientation: this.orientation,
        }
    }

    @Prop()
    borderColor?: string;
    @Prop()
    borderWidth?: number;
    @Prop()
    borderRadius?: number;
    @Prop()
    textAnchor?: string;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    position?: string;
    @Prop()
    orientation?: string;
    @Prop()
    text?: string | string[];
    @Prop()
    style?: AnnotationStyle;
    @Prop()
    mouseEnter?: Function;
    @Prop()
    mouseLeave?: Function;
    @Prop()
    click?: Function;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"annotation-label-text-list","shadow":true})
class AnnotationLabelTextList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.AnnotationLabel['text'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"annotation-label-text-item","shadow":true})
class AnnotationLabelTextItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.AnnotationLabel['text'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"annotation-style","shadow":true})
class AnnotationStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const paddingChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'annotation-style-padding') ?? []
        this.padding = (paddingChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.AnnotationStyle> {
        return {
        	background: this.background,
        	color: this.color,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    background?: string;
    @Prop()
    color?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontSize?: string;
    @Prop()
    cssClass?: string;
    @Prop()
    padding?: { left?: number | undefined; right?: number | undefined; top?: number | undefined; bottom?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"annotation-style-padding","shadow":true})
class AnnotationStylePadding {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.AnnotationStyle['padding'], undefined>> {
        return {
        	left: this.left,
        	right: this.right,
        	top: this.top,
        	bottom: this.bottom,
        }
    }

    @Prop()
    left?: number;
    @Prop()
    right?: number;
    @Prop()
    top?: number;
    @Prop()
    bottom?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"x-axis-annotations","shadow":true})
class XAxisAnnotations {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<globalThis.XAxisAnnotations> {
        return {
        	id: this.id,
        	x: this.x,
        	x2: this.x2,
        	strokeDashArray: this.strokeDashArray,
        	fillColor: this.fillColor,
        	borderColor: this.borderColor,
        	borderWidth: this.borderWidth,
        	opacity: this.opacity,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    id?: string | number;
    @Prop()
    x?: string | number | null;
    @Prop()
    x2?: string | number | null;
    @Prop()
    strokeDashArray?: number;
    @Prop()
    fillColor?: string;
    @Prop()
    borderColor?: string;
    @Prop()
    borderWidth?: number;
    @Prop()
    opacity?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    label?: AnnotationLabel;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"y-axis-annotations","shadow":true})
class YAxisAnnotations {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<globalThis.YAxisAnnotations> {
        return {
        	id: this.id,
        	y: this.y,
        	y2: this.y2,
        	strokeDashArray: this.strokeDashArray,
        	fillColor: this.fillColor,
        	borderColor: this.borderColor,
        	borderWidth: this.borderWidth,
        	opacity: this.opacity,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	width: this.width,
        	yAxisIndex: this.yAxisIndex,
        }
    }

    @Prop()
    id?: string | number;
    @Prop()
    y?: string | number | null;
    @Prop()
    y2?: string | number | null;
    @Prop()
    strokeDashArray?: number;
    @Prop()
    fillColor?: string;
    @Prop()
    borderColor?: string;
    @Prop()
    borderWidth?: number;
    @Prop()
    opacity?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    width?: string | number;
    @Prop()
    yAxisIndex?: number;
    @Prop()
    label?: AnnotationLabel;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"point-annotations","shadow":true})
class PointAnnotations {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const markerChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'point-annotations-marker') ?? []
        this.marker = (markerChildren.at(0) as any)?.getData()
        const imageChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'point-annotations-image') ?? []
        this.image = (imageChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.PointAnnotations> {
        return {
        	id: this.id,
        	x: this.x,
        	y: this.y,
        	yAxisIndex: this.yAxisIndex,
        	seriesIndex: this.seriesIndex,
        }
    }

    @Prop()
    id?: string | number;
    @Prop()
    x?: string | number;
    @Prop()
    y?: number | null;
    @Prop()
    yAxisIndex?: number;
    @Prop()
    seriesIndex?: number;
    @Prop()
    mouseEnter?: Function;
    @Prop()
    mouseLeave?: Function;
    @Prop()
    click?: Function;
    @Prop()
    marker?: { size?: number | undefined; fillColor?: string | undefined; strokeColor?: string | undefined; strokeWidth?: number | undefined; shape?: string | undefined; offsetX?: number | undefined; offsetY?: number | undefined; cssClass?: string | undefined; };
    @Prop()
    label?: AnnotationLabel;
    @Prop()
    image?: { path?: string | undefined; width?: number | undefined; height?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"point-annotations-marker","shadow":true})
class PointAnnotationsMarker {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.PointAnnotations['marker'], undefined>> {
        return {
        	size: this.size,
        	fillColor: this.fillColor,
        	strokeColor: this.strokeColor,
        	strokeWidth: this.strokeWidth,
        	shape: this.shape,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    size?: number;
    @Prop()
    fillColor?: string;
    @Prop()
    strokeColor?: string;
    @Prop()
    strokeWidth?: number;
    @Prop()
    shape?: string;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    cssClass?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"point-annotations-image","shadow":true})
class PointAnnotationsImage {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.PointAnnotations['image'], undefined>> {
        return {
        	path: this.path,
        	width: this.width,
        	height: this.height,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    path?: string;
    @Prop()
    width?: number;
    @Prop()
    height?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"text-annotations","shadow":true})
class TextAnnotations {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<globalThis.TextAnnotations> {
        return {
        	x: this.x,
        	y: this.y,
        	text: this.text,
        	textAnchor: this.textAnchor,
        	foreColor: this.foreColor,
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	backgroundColor: this.backgroundColor,
        	borderColor: this.borderColor,
        	borderRadius: this.borderRadius,
        	borderWidth: this.borderWidth,
        	paddingLeft: this.paddingLeft,
        	paddingRight: this.paddingRight,
        	paddingTop: this.paddingTop,
        	paddingBottom: this.paddingBottom,
        }
    }

    @Prop()
    x?: number;
    @Prop()
    y?: number;
    @Prop()
    text?: string;
    @Prop()
    textAnchor?: string;
    @Prop()
    foreColor?: string;
    @Prop()
    fontSize?: string | number;
    @Prop()
    fontFamily?: string | undefined;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    backgroundColor?: string;
    @Prop()
    borderColor?: string;
    @Prop()
    borderRadius?: number;
    @Prop()
    borderWidth?: number;
    @Prop()
    paddingLeft?: number;
    @Prop()
    paddingRight?: number;
    @Prop()
    paddingTop?: number;
    @Prop()
    paddingBottom?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"image-annotations","shadow":true})
class ImageAnnotations {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<globalThis.ImageAnnotations> {
        return {
        	path: this.path,
        	x: this.x,
        	y: this.y,
        	width: this.width,
        	height: this.height,
        }
    }

    @Prop()
    path?: string;
    @Prop()
    x?: number;
    @Prop()
    y?: number;
    @Prop()
    width?: number;
    @Prop()
    height?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale","shadow":true})
class ApexLocale {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const optionsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options') ?? []
        this.options = (optionsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexLocale> {
        return {
        	name: this.name,
        }
    }

    @Prop()
    name?: string;
    @Prop()
    options?: { months?: string[] | undefined; shortMonths?: string[] | undefined; days?: string[] | undefined; shortDays?: string[] | undefined; toolbar?: { download?: string | undefined; selection?: string | undefined; selectionZoom?: string | undefined; zoomIn?: string | undefined; zoomOut?: string | undefined; pan?: string | undefined; reset?: string | undefined; exportToSVG?: string | undefined; exportToPNG?: string | undefined; exportToCSV?: string | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options","shadow":true})
class ApexLocaleOptions {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const monthsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-months-list') ?? []
        this.months = monthsChildren.map(el => (el as any).getData())
        const shortMonthsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-short-months-list') ?? []
        this.shortMonths = shortMonthsChildren.map(el => (el as any).getData())
        const daysChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-days-list') ?? []
        this.days = daysChildren.map(el => (el as any).getData())
        const shortDaysChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-short-days-list') ?? []
        this.shortDays = shortDaysChildren.map(el => (el as any).getData())
        const toolbarChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-toolbar') ?? []
        this.toolbar = (toolbarChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLocale['options'], undefined>> {
        return {
        }
    }

    @Prop()
    months?: string[];
    @Prop()
    shortMonths?: string[];
    @Prop()
    days?: string[];
    @Prop()
    shortDays?: string[];
    @Prop()
    toolbar?: { download?: string | undefined; selection?: string | undefined; selectionZoom?: string | undefined; zoomIn?: string | undefined; zoomOut?: string | undefined; pan?: string | undefined; reset?: string | undefined; exportToSVG?: string | undefined; exportToPNG?: string | undefined; exportToCSV?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options-months-list","shadow":true})
class ApexLocaleOptionsMonthsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['months'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options-months-item","shadow":true})
class ApexLocaleOptionsMonthsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['months'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options-short-months-list","shadow":true})
class ApexLocaleOptionsShortMonthsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortMonths'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options-short-months-item","shadow":true})
class ApexLocaleOptionsShortMonthsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortMonths'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options-days-list","shadow":true})
class ApexLocaleOptionsDaysList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['days'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options-days-item","shadow":true})
class ApexLocaleOptionsDaysItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['days'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options-short-days-list","shadow":true})
class ApexLocaleOptionsShortDaysList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortDays'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options-short-days-item","shadow":true})
class ApexLocaleOptionsShortDaysItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortDays'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-locale-options-toolbar","shadow":true})
class ApexLocaleOptionsToolbar {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['toolbar'], undefined>> {
        return {
        	download: this.download,
        	selection: this.selection,
        	selectionZoom: this.selectionZoom,
        	zoomIn: this.zoomIn,
        	zoomOut: this.zoomOut,
        	pan: this.pan,
        	reset: this.reset,
        	exportToSVG: this.exportToSVG,
        	exportToPNG: this.exportToPNG,
        	exportToCSV: this.exportToCSV,
        }
    }

    @Prop()
    download?: string;
    @Prop()
    selection?: string;
    @Prop()
    selectionZoom?: string;
    @Prop()
    zoomIn?: string;
    @Prop()
    zoomOut?: string;
    @Prop()
    pan?: string;
    @Prop()
    reset?: string;
    @Prop()
    exportToSVG?: string;
    @Prop()
    exportToPNG?: string;
    @Prop()
    exportToCSV?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options","shadow":true})
class ApexPlotOptions {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const lineChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-line') ?? []
        this.line = (lineChildren.at(0) as any)?.getData()
        const areaChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-area') ?? []
        this.area = (areaChildren.at(0) as any)?.getData()
        const barChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar') ?? []
        this.bar = (barChildren.at(0) as any)?.getData()
        const bubbleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bubble') ?? []
        this.bubble = (bubbleChildren.at(0) as any)?.getData()
        const candlestickChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick') ?? []
        this.candlestick = (candlestickChildren.at(0) as any)?.getData()
        const boxPlotChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-box-plot') ?? []
        this.boxPlot = (boxPlotChildren.at(0) as any)?.getData()
        const heatmapChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-heatmap') ?? []
        this.heatmap = (heatmapChildren.at(0) as any)?.getData()
        const treemapChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap') ?? []
        this.treemap = (treemapChildren.at(0) as any)?.getData()
        const pieChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie') ?? []
        this.pie = (pieChildren.at(0) as any)?.getData()
        const polarAreaChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-polar-area') ?? []
        this.polarArea = (polarAreaChildren.at(0) as any)?.getData()
        const radarChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar') ?? []
        this.radar = (radarChildren.at(0) as any)?.getData()
        const radialBarChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar') ?? []
        this.radialBar = (radialBarChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexPlotOptions> {
        return {
        }
    }

    @Prop()
    line?: { isSlopeChart?: boolean | undefined; colors?: { threshold?: number | undefined; colorAboveThreshold?: string | undefined; colorBelowThreshold?: string | undefined; } | undefined; };
    @Prop()
    area?: { fillTo?: "origin" | "end" | undefined; };
    @Prop()
    bar?: { horizontal?: boolean | undefined; columnWidth?: string | number | undefined; barHeight?: string | number | undefined; distributed?: boolean | undefined; borderRadius?: number | undefined; borderRadiusApplication?: "around" | "end" | undefined; borderRadiusWhenStacked?: "all" | "last" | undefined; hideZeroBarsWhenGrouped?: boolean | undefined; rangeBarOverlap?: boolean | undefined; rangeBarGroupRows?: boolean | undefined; isDumbbell?: boolean | undefined; dumbbellColors?: string[][] | undefined; isFunnel?: boolean | undefined; isFunnel3d?: boolean | undefined; colors?: { ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; }[] | undefined; backgroundBarColors?: string[] | undefined; backgroundBarOpacity?: number | undefined; backgroundBarRadius?: number | undefined; } | undefined; dataLabels?: { maxItems?: number | undefined; hideOverflowingLabels?: boolean | undefined; position?: string | undefined; orientation?: "horizontal" | "vertical" | undefined; total?: { enabled?: boolean | undefined; formatter?(val?: string | undefined, opts?: any): string; offsetX?: number | undefined; offsetY?: number | undefined; style?: { color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; } | undefined; } | undefined; } | undefined; };
    @Prop()
    bubble?: { zScaling?: boolean | undefined; minBubbleRadius?: number | undefined; maxBubbleRadius?: number | undefined; };
    @Prop()
    candlestick?: { type?: string | undefined; colors?: { upward?: string | string[] | undefined; downward?: string | string[] | undefined; } | undefined; wick?: { useFillColor?: boolean | undefined; } | undefined; };
    @Prop()
    boxPlot?: { colors?: { upper?: string | string[] | undefined; lower?: string | string[] | undefined; } | undefined; };
    @Prop()
    heatmap?: { radius?: number | undefined; enableShades?: boolean | undefined; shadeIntensity?: number | undefined; reverseNegativeShade?: boolean | undefined; distributed?: boolean | undefined; useFillColorAsStroke?: boolean | undefined; colorScale?: { ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; foreColor?: string | undefined; name?: string | undefined; }[] | undefined; inverse?: boolean | undefined; min?: number | undefined; max?: number | undefined; } | undefined; };
    @Prop()
    treemap?: { enableShades?: boolean | undefined; shadeIntensity?: number | undefined; distributed?: boolean | undefined; reverseNegativeShade?: boolean | undefined; useFillColorAsStroke?: boolean | undefined; dataLabels?: { format?: "scale" | "truncate" | undefined; } | undefined; borderRadius?: number | undefined; colorScale?: { inverse?: boolean | undefined; ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; foreColor?: string | undefined; name?: string | undefined; }[] | undefined; min?: number | undefined; max?: number | undefined; } | undefined; seriesTitle?: { show?: boolean | undefined; offsetY?: number | undefined; offsetX?: number | undefined; borderColor?: string | undefined; borderWidth?: number | undefined; borderRadius?: number | undefined; style?: { background?: string | undefined; color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; padding?: { left?: number | undefined; right?: number | undefined; top?: number | undefined; bottom?: number | undefined; } | undefined; } | undefined; } | undefined; };
    @Prop()
    pie?: { startAngle?: number | undefined; endAngle?: number | undefined; customScale?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; expandOnClick?: boolean | undefined; dataLabels?: { offset?: number | undefined; minAngleToShowLabel?: number | undefined; } | undefined; donut?: { size?: string | undefined; background?: string | undefined; labels?: { show?: boolean | undefined; name?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; } | undefined; value?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; } | undefined; total?: { show?: boolean | undefined; showAlways?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; label?: string | undefined; color?: string | undefined; formatter?(w: any): string; } | undefined; } | undefined; } | undefined; };
    @Prop()
    polarArea?: { rings?: { strokeWidth?: number | undefined; strokeColor?: string | undefined; } | undefined; spokes?: { strokeWidth?: number | undefined; connectorColors?: string | string[] | undefined; } | undefined; };
    @Prop()
    radar?: { size?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; polygons?: { strokeColors?: string | string[] | undefined; strokeWidth?: string | string[] | undefined; connectorColors?: string | string[] | undefined; fill?: { colors?: string[] | undefined; } | undefined; } | undefined; };
    @Prop()
    radialBar?: { inverseOrder?: boolean | undefined; startAngle?: number | undefined; endAngle?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; hollow?: { margin?: number | undefined; size?: string | undefined; background?: string | undefined; image?: string | undefined; imageWidth?: number | undefined; imageHeight?: number | undefined; imageOffsetX?: number | undefined; imageOffsetY?: number | undefined; imageClipped?: boolean | undefined; position?: "front" | "back" | undefined; dropShadow?: ApexDropShadow | undefined; } | undefined; track?: { show?: boolean | undefined; startAngle?: number | undefined; endAngle?: number | undefined; background?: string | string[] | undefined; strokeWidth?: string | undefined; opacity?: number | undefined; margin?: number | undefined; dropShadow?: ApexDropShadow | undefined; } | undefined; dataLabels?: { show?: boolean | undefined; name?: { show?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; color?: string | undefined; offsetY?: number | undefined; } | undefined; value?: { show?: boolean | undefined; fontFamily?: string | undefined; fontSize?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: number): string; } | undefined; total?: { show?: boolean | undefined; label?: string | undefined; color?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; formatter?(opts: any): string; } | undefined; } | undefined; barLabels?: { enabled?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; useSeriesColors?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; formatter?: ((barName: string, opts?: any) => string) | undefined; onClick?: ((barName: string, opts?: any) => void) | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-line","shadow":true})
class ApexPlotOptionsLine {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-line-colors') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['line'], undefined>> {
        return {
        	isSlopeChart: this.isSlopeChart,
        }
    }

    @Prop()
    isSlopeChart?: boolean;
    @Prop()
    colors?: { threshold?: number | undefined; colorAboveThreshold?: string | undefined; colorBelowThreshold?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-line-colors","shadow":true})
class ApexPlotOptionsLineColors {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['line'], undefined>['colors'], undefined>> {
        return {
        	threshold: this.threshold,
        	colorAboveThreshold: this.colorAboveThreshold,
        	colorBelowThreshold: this.colorBelowThreshold,
        }
    }

    @Prop()
    threshold?: number;
    @Prop()
    colorAboveThreshold?: string;
    @Prop()
    colorBelowThreshold?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-area","shadow":true})
class ApexPlotOptionsArea {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['area'], undefined>> {
        return {
        	fillTo: this.fillTo,
        }
    }

    @Prop()
    fillTo?: "origin" | "end";

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar","shadow":true})
class ApexPlotOptionsBar {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const dumbbellColorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-dumbbell-colors-list') ?? []
        this.dumbbellColors = dumbbellColorsChildren.map(el => (el as any).getData())
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-colors') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
        const dataLabelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-data-labels') ?? []
        this.dataLabels = (dataLabelsChildren.at(0) as any)?.getData()
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

@Component({"tag":"apex-plot-options-bar-dumbbell-colors-list","shadow":true})
class ApexPlotOptionsBarDumbbellColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string[]> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-dumbbell-colors-item-list","shadow":true})
class ApexPlotOptionsBarDumbbellColorsItemList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>[0]> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-dumbbell-colors-item-item","shadow":true})
class ApexPlotOptionsBarDumbbellColorsItemItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>[0][0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-colors","shadow":true})
class ApexPlotOptionsBarColors {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const rangesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-colors-ranges-list') ?? []
        this.ranges = rangesChildren.map(el => (el as any).getData())
        const backgroundBarColorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-colors-background-bar-colors-list') ?? []
        this.backgroundBarColors = backgroundBarColorsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>> {
        return {
        	backgroundBarOpacity: this.backgroundBarOpacity,
        	backgroundBarRadius: this.backgroundBarRadius,
        }
    }

    @Prop()
    backgroundBarOpacity?: number;
    @Prop()
    backgroundBarRadius?: number;
    @Prop()
    ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; }[];
    @Prop()
    backgroundBarColors?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-colors-ranges-list","shadow":true})
class ApexPlotOptionsBarColorsRangesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['ranges'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
                from?: number
                to?: number
                color?: string
              }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-colors-ranges-item","shadow":true})
class ApexPlotOptionsBarColorsRangesItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['ranges'], undefined>[0]> {
        return {
        	from: this.from,
        	to: this.to,
        	color: this.color,
        }
    }

    @Prop()
    from?: number;
    @Prop()
    to?: number;
    @Prop()
    color?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-colors-background-bar-colors-list","shadow":true})
class ApexPlotOptionsBarColorsBackgroundBarColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['backgroundBarColors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-colors-background-bar-colors-item","shadow":true})
class ApexPlotOptionsBarColorsBackgroundBarColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['backgroundBarColors'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-data-labels","shadow":true})
class ApexPlotOptionsBarDataLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const totalChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-data-labels-total') ?? []
        this.total = (totalChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dataLabels'], undefined>> {
        return {
        	maxItems: this.maxItems,
        	hideOverflowingLabels: this.hideOverflowingLabels,
        	position: this.position,
        	orientation: this.orientation,
        }
    }

    @Prop()
    maxItems?: number;
    @Prop()
    hideOverflowingLabels?: boolean;
    @Prop()
    position?: string;
    @Prop()
    orientation?: "horizontal" | "vertical";
    @Prop()
    total?: { enabled?: boolean | undefined; formatter?(val?: string | undefined, opts?: any): string; offsetX?: number | undefined; offsetY?: number | undefined; style?: { color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-data-labels-total","shadow":true})
class ApexPlotOptionsBarDataLabelsTotal {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-data-labels-total-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dataLabels'], undefined>['total'], undefined>> {
        return {
        	enabled: this.enabled,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bar-data-labels-total-style","shadow":true})
class ApexPlotOptionsBarDataLabelsTotalStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dataLabels'], undefined>['total'], undefined>['style'], undefined>> {
        return {
        	color: this.color,
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-bubble","shadow":true})
class ApexPlotOptionsBubble {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['bubble'], undefined>> {
        return {
        	zScaling: this.zScaling,
        	minBubbleRadius: this.minBubbleRadius,
        	maxBubbleRadius: this.maxBubbleRadius,
        }
    }

    @Prop()
    zScaling?: boolean;
    @Prop()
    minBubbleRadius?: number;
    @Prop()
    maxBubbleRadius?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-candlestick","shadow":true})
class ApexPlotOptionsCandlestick {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick-colors') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
        const wickChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick-wick') ?? []
        this.wick = (wickChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>> {
        return {
        	type: this.type,
        }
    }

    @Prop()
    type?: string;
    @Prop()
    colors?: { upward?: string | string[] | undefined; downward?: string | string[] | undefined; };
    @Prop()
    wick?: { useFillColor?: boolean | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-candlestick-colors","shadow":true})
class ApexPlotOptionsCandlestickColors {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const upwardChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick-colors-upward-list') ?? []
        this.upward = (upwardChildren.at(0) as any)?.getData()
        const downwardChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick-colors-downward-list') ?? []
        this.downward = (downwardChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>> {
        return {
        }
    }

    @Prop()
    upward?: string | string[];
    @Prop()
    downward?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-candlestick-colors-upward-list","shadow":true})
class ApexPlotOptionsCandlestickColorsUpwardList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['upward'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-candlestick-colors-upward-item","shadow":true})
class ApexPlotOptionsCandlestickColorsUpwardItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['upward'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-candlestick-colors-downward-list","shadow":true})
class ApexPlotOptionsCandlestickColorsDownwardList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['downward'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-candlestick-colors-downward-item","shadow":true})
class ApexPlotOptionsCandlestickColorsDownwardItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['downward'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-candlestick-wick","shadow":true})
class ApexPlotOptionsCandlestickWick {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['wick'], undefined>> {
        return {
        	useFillColor: this.useFillColor,
        }
    }

    @Prop()
    useFillColor?: boolean;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-box-plot","shadow":true})
class ApexPlotOptionsBoxPlot {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-box-plot-colors') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>> {
        return {
        }
    }

    @Prop()
    colors?: { upper?: string | string[] | undefined; lower?: string | string[] | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors","shadow":true})
class ApexPlotOptionsBoxPlotColors {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const upperChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-box-plot-colors-upper-list') ?? []
        this.upper = (upperChildren.at(0) as any)?.getData()
        const lowerChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-box-plot-colors-lower-list') ?? []
        this.lower = (lowerChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>> {
        return {
        }
    }

    @Prop()
    upper?: string | string[];
    @Prop()
    lower?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors-upper-list","shadow":true})
class ApexPlotOptionsBoxPlotColorsUpperList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['upper'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors-upper-item","shadow":true})
class ApexPlotOptionsBoxPlotColorsUpperItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['upper'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors-lower-list","shadow":true})
class ApexPlotOptionsBoxPlotColorsLowerList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['lower'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors-lower-item","shadow":true})
class ApexPlotOptionsBoxPlotColorsLowerItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['lower'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-heatmap","shadow":true})
class ApexPlotOptionsHeatmap {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorScaleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-heatmap-color-scale') ?? []
        this.colorScale = (colorScaleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>> {
        return {
        	radius: this.radius,
        	enableShades: this.enableShades,
        	shadeIntensity: this.shadeIntensity,
        	reverseNegativeShade: this.reverseNegativeShade,
        	distributed: this.distributed,
        	useFillColorAsStroke: this.useFillColorAsStroke,
        }
    }

    @Prop()
    radius?: number;
    @Prop()
    enableShades?: boolean;
    @Prop()
    shadeIntensity?: number;
    @Prop()
    reverseNegativeShade?: boolean;
    @Prop()
    distributed?: boolean;
    @Prop()
    useFillColorAsStroke?: boolean;
    @Prop()
    colorScale?: { ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; foreColor?: string | undefined; name?: string | undefined; }[] | undefined; inverse?: boolean | undefined; min?: number | undefined; max?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-heatmap-color-scale","shadow":true})
class ApexPlotOptionsHeatmapColorScale {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const rangesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-heatmap-color-scale-ranges-list') ?? []
        this.ranges = rangesChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>> {
        return {
        	inverse: this.inverse,
        	min: this.min,
        	max: this.max,
        }
    }

    @Prop()
    inverse?: boolean;
    @Prop()
    min?: number;
    @Prop()
    max?: number;
    @Prop()
    ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; foreColor?: string | undefined; name?: string | undefined; }[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-heatmap-color-scale-ranges-list","shadow":true})
class ApexPlotOptionsHeatmapColorScaleRangesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>['ranges'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
                from?: number
                to?: number
                color?: string
                foreColor?: string
                name?: string
              }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-heatmap-color-scale-ranges-item","shadow":true})
class ApexPlotOptionsHeatmapColorScaleRangesItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>['ranges'], undefined>[0]> {
        return {
        	from: this.from,
        	to: this.to,
        	color: this.color,
        	foreColor: this.foreColor,
        	name: this.name,
        }
    }

    @Prop()
    from?: number;
    @Prop()
    to?: number;
    @Prop()
    color?: string;
    @Prop()
    foreColor?: string;
    @Prop()
    name?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-treemap","shadow":true})
class ApexPlotOptionsTreemap {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const dataLabelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-data-labels') ?? []
        this.dataLabels = (dataLabelsChildren.at(0) as any)?.getData()
        const colorScaleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-color-scale') ?? []
        this.colorScale = (colorScaleChildren.at(0) as any)?.getData()
        const seriesTitleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-series-title') ?? []
        this.seriesTitle = (seriesTitleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>> {
        return {
        	enableShades: this.enableShades,
        	shadeIntensity: this.shadeIntensity,
        	distributed: this.distributed,
        	reverseNegativeShade: this.reverseNegativeShade,
        	useFillColorAsStroke: this.useFillColorAsStroke,
        	borderRadius: this.borderRadius,
        }
    }

    @Prop()
    enableShades?: boolean;
    @Prop()
    shadeIntensity?: number;
    @Prop()
    distributed?: boolean;
    @Prop()
    reverseNegativeShade?: boolean;
    @Prop()
    useFillColorAsStroke?: boolean;
    @Prop()
    borderRadius?: number;
    @Prop()
    dataLabels?: { format?: "scale" | "truncate" | undefined; };
    @Prop()
    colorScale?: { inverse?: boolean | undefined; ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; foreColor?: string | undefined; name?: string | undefined; }[] | undefined; min?: number | undefined; max?: number | undefined; };
    @Prop()
    seriesTitle?: { show?: boolean | undefined; offsetY?: number | undefined; offsetX?: number | undefined; borderColor?: string | undefined; borderWidth?: number | undefined; borderRadius?: number | undefined; style?: { background?: string | undefined; color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; padding?: { left?: number | undefined; right?: number | undefined; top?: number | undefined; bottom?: number | undefined; } | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-treemap-data-labels","shadow":true})
class ApexPlotOptionsTreemapDataLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['dataLabels'], undefined>> {
        return {
        	format: this.format,
        }
    }

    @Prop()
    format?: "scale" | "truncate";

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-treemap-color-scale","shadow":true})
class ApexPlotOptionsTreemapColorScale {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const rangesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-color-scale-ranges-list') ?? []
        this.ranges = rangesChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['colorScale'], undefined>> {
        return {
        	inverse: this.inverse,
        	min: this.min,
        	max: this.max,
        }
    }

    @Prop()
    inverse?: boolean;
    @Prop()
    min?: number;
    @Prop()
    max?: number;
    @Prop()
    ranges?: { from?: number | undefined; to?: number | undefined; color?: string | undefined; foreColor?: string | undefined; name?: string | undefined; }[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-treemap-color-scale-ranges-list","shadow":true})
class ApexPlotOptionsTreemapColorScaleRangesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['colorScale'], undefined>['ranges'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{
                from?: number
                to?: number
                color?: string
                foreColor?: string
                name?: string
              }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-treemap-color-scale-ranges-item","shadow":true})
class ApexPlotOptionsTreemapColorScaleRangesItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['colorScale'], undefined>['ranges'], undefined>[0]> {
        return {
        	from: this.from,
        	to: this.to,
        	color: this.color,
        	foreColor: this.foreColor,
        	name: this.name,
        }
    }

    @Prop()
    from?: number;
    @Prop()
    to?: number;
    @Prop()
    color?: string;
    @Prop()
    foreColor?: string;
    @Prop()
    name?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-treemap-series-title","shadow":true})
class ApexPlotOptionsTreemapSeriesTitle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-series-title-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['seriesTitle'], undefined>> {
        return {
        	show: this.show,
        	offsetY: this.offsetY,
        	offsetX: this.offsetX,
        	borderColor: this.borderColor,
        	borderWidth: this.borderWidth,
        	borderRadius: this.borderRadius,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    offsetY?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    borderColor?: string;
    @Prop()
    borderWidth?: number;
    @Prop()
    borderRadius?: number;
    @Prop()
    style?: { background?: string | undefined; color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; padding?: { left?: number | undefined; right?: number | undefined; top?: number | undefined; bottom?: number | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-treemap-series-title-style","shadow":true})
class ApexPlotOptionsTreemapSeriesTitleStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const paddingChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-series-title-style-padding') ?? []
        this.padding = (paddingChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['seriesTitle'], undefined>['style'], undefined>> {
        return {
        	background: this.background,
        	color: this.color,
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    background?: string;
    @Prop()
    color?: string;
    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    cssClass?: string;
    @Prop()
    padding?: { left?: number | undefined; right?: number | undefined; top?: number | undefined; bottom?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-treemap-series-title-style-padding","shadow":true})
class ApexPlotOptionsTreemapSeriesTitleStylePadding {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['seriesTitle'], undefined>['style'], undefined>['padding'], undefined>> {
        return {
        	left: this.left,
        	right: this.right,
        	top: this.top,
        	bottom: this.bottom,
        }
    }

    @Prop()
    left?: number;
    @Prop()
    right?: number;
    @Prop()
    top?: number;
    @Prop()
    bottom?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-pie","shadow":true})
class ApexPlotOptionsPie {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const dataLabelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-data-labels') ?? []
        this.dataLabels = (dataLabelsChildren.at(0) as any)?.getData()
        const donutChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut') ?? []
        this.donut = (donutChildren.at(0) as any)?.getData()
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

@Component({"tag":"apex-plot-options-pie-data-labels","shadow":true})
class ApexPlotOptionsPieDataLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['dataLabels'], undefined>> {
        return {
        	offset: this.offset,
        	minAngleToShowLabel: this.minAngleToShowLabel,
        }
    }

    @Prop()
    offset?: number;
    @Prop()
    minAngleToShowLabel?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-pie-donut","shadow":true})
class ApexPlotOptionsPieDonut {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const labelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut-labels') ?? []
        this.labels = (labelsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>> {
        return {
        	size: this.size,
        	background: this.background,
        }
    }

    @Prop()
    size?: string;
    @Prop()
    background?: string;
    @Prop()
    labels?: { show?: boolean | undefined; name?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; } | undefined; value?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; } | undefined; total?: { show?: boolean | undefined; showAlways?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; label?: string | undefined; color?: string | undefined; formatter?(w: any): string; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-pie-donut-labels","shadow":true})
class ApexPlotOptionsPieDonutLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const nameChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut-labels-name') ?? []
        this.name = (nameChildren.at(0) as any)?.getData()
        const valueChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut-labels-value') ?? []
        this.value = (valueChildren.at(0) as any)?.getData()
        const totalChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut-labels-total') ?? []
        this.total = (totalChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>> {
        return {
        	show: this.show,
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

@Component({"tag":"apex-plot-options-pie-donut-labels-name","shadow":true})
class ApexPlotOptionsPieDonutLabelsName {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>['name'], undefined>> {
        return {
        	show: this.show,
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	color: this.color,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    color?: string;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-pie-donut-labels-value","shadow":true})
class ApexPlotOptionsPieDonutLabelsValue {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>['value'], undefined>> {
        return {
        	show: this.show,
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	color: this.color,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    color?: string;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-pie-donut-labels-total","shadow":true})
class ApexPlotOptionsPieDonutLabelsTotal {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>['total'], undefined>> {
        return {
        	show: this.show,
        	showAlways: this.showAlways,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        	label: this.label,
        	color: this.color,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    showAlways?: boolean;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontSize?: string;
    @Prop()
    label?: string;
    @Prop()
    color?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-polar-area","shadow":true})
class ApexPlotOptionsPolarArea {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const ringsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-polar-area-rings') ?? []
        this.rings = (ringsChildren.at(0) as any)?.getData()
        const spokesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-polar-area-spokes') ?? []
        this.spokes = (spokesChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>> {
        return {
        }
    }

    @Prop()
    rings?: { strokeWidth?: number | undefined; strokeColor?: string | undefined; };
    @Prop()
    spokes?: { strokeWidth?: number | undefined; connectorColors?: string | string[] | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-polar-area-rings","shadow":true})
class ApexPlotOptionsPolarAreaRings {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['rings'], undefined>> {
        return {
        	strokeWidth: this.strokeWidth,
        	strokeColor: this.strokeColor,
        }
    }

    @Prop()
    strokeWidth?: number;
    @Prop()
    strokeColor?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-polar-area-spokes","shadow":true})
class ApexPlotOptionsPolarAreaSpokes {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const connectorColorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-polar-area-spokes-connector-colors-list') ?? []
        this.connectorColors = (connectorColorsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>> {
        return {
        	strokeWidth: this.strokeWidth,
        }
    }

    @Prop()
    strokeWidth?: number;
    @Prop()
    connectorColors?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-polar-area-spokes-connector-colors-list","shadow":true})
class ApexPlotOptionsPolarAreaSpokesConnectorColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>['connectorColors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-polar-area-spokes-connector-colors-item","shadow":true})
class ApexPlotOptionsPolarAreaSpokesConnectorColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>['connectorColors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar","shadow":true})
class ApexPlotOptionsRadar {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const polygonsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons') ?? []
        this.polygons = (polygonsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['radar'], undefined>> {
        return {
        	size: this.size,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    size?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    polygons?: { strokeColors?: string | string[] | undefined; strokeWidth?: string | string[] | undefined; connectorColors?: string | string[] | undefined; fill?: { colors?: string[] | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons","shadow":true})
class ApexPlotOptionsRadarPolygons {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const strokeColorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-stroke-colors-list') ?? []
        this.strokeColors = (strokeColorsChildren.at(0) as any)?.getData()
        const strokeWidthChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-stroke-width-list') ?? []
        this.strokeWidth = (strokeWidthChildren.at(0) as any)?.getData()
        const connectorColorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-connector-colors-list') ?? []
        this.connectorColors = (connectorColorsChildren.at(0) as any)?.getData()
        const fillChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-fill') ?? []
        this.fill = (fillChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>> {
        return {
        }
    }

    @Prop()
    strokeColors?: string | string[];
    @Prop()
    strokeWidth?: string | string[];
    @Prop()
    connectorColors?: string | string[];
    @Prop()
    fill?: { colors?: string[] | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-stroke-colors-list","shadow":true})
class ApexPlotOptionsRadarPolygonsStrokeColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeColors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-stroke-colors-item","shadow":true})
class ApexPlotOptionsRadarPolygonsStrokeColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeColors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-stroke-width-list","shadow":true})
class ApexPlotOptionsRadarPolygonsStrokeWidthList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeWidth'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-stroke-width-item","shadow":true})
class ApexPlotOptionsRadarPolygonsStrokeWidthItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeWidth'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-connector-colors-list","shadow":true})
class ApexPlotOptionsRadarPolygonsConnectorColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['connectorColors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-connector-colors-item","shadow":true})
class ApexPlotOptionsRadarPolygonsConnectorColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['connectorColors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-fill","shadow":true})
class ApexPlotOptionsRadarPolygonsFill {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-fill-colors-list') ?? []
        this.colors = colorsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>> {
        return {
        }
    }

    @Prop()
    colors?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-fill-colors-list","shadow":true})
class ApexPlotOptionsRadarPolygonsFillColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>['colors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-fill-colors-item","shadow":true})
class ApexPlotOptionsRadarPolygonsFillColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>['colors'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radial-bar","shadow":true})
class ApexPlotOptionsRadialBar {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const hollowChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-hollow') ?? []
        this.hollow = (hollowChildren.at(0) as any)?.getData()
        const trackChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-track') ?? []
        this.track = (trackChildren.at(0) as any)?.getData()
        const dataLabelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-data-labels') ?? []
        this.dataLabels = (dataLabelsChildren.at(0) as any)?.getData()
        const barLabelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-bar-labels') ?? []
        this.barLabels = (barLabelsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>> {
        return {
        	inverseOrder: this.inverseOrder,
        	startAngle: this.startAngle,
        	endAngle: this.endAngle,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    inverseOrder?: boolean;
    @Prop()
    startAngle?: number;
    @Prop()
    endAngle?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    hollow?: { margin?: number | undefined; size?: string | undefined; background?: string | undefined; image?: string | undefined; imageWidth?: number | undefined; imageHeight?: number | undefined; imageOffsetX?: number | undefined; imageOffsetY?: number | undefined; imageClipped?: boolean | undefined; position?: "front" | "back" | undefined; dropShadow?: ApexDropShadow | undefined; };
    @Prop()
    track?: { show?: boolean | undefined; startAngle?: number | undefined; endAngle?: number | undefined; background?: string | string[] | undefined; strokeWidth?: string | undefined; opacity?: number | undefined; margin?: number | undefined; dropShadow?: ApexDropShadow | undefined; };
    @Prop()
    dataLabels?: { show?: boolean | undefined; name?: { show?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; color?: string | undefined; offsetY?: number | undefined; } | undefined; value?: { show?: boolean | undefined; fontFamily?: string | undefined; fontSize?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: number): string; } | undefined; total?: { show?: boolean | undefined; label?: string | undefined; color?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; formatter?(opts: any): string; } | undefined; };
    @Prop()
    barLabels?: { enabled?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; useSeriesColors?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; formatter?: ((barName: string, opts?: any) => string) | undefined; onClick?: ((barName: string, opts?: any) => void) | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radial-bar-hollow","shadow":true})
class ApexPlotOptionsRadialBarHollow {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['hollow'], undefined>> {
        return {
        	margin: this.margin,
        	size: this.size,
        	background: this.background,
        	image: this.image,
        	imageWidth: this.imageWidth,
        	imageHeight: this.imageHeight,
        	imageOffsetX: this.imageOffsetX,
        	imageOffsetY: this.imageOffsetY,
        	imageClipped: this.imageClipped,
        	position: this.position,
        }
    }

    @Prop()
    margin?: number;
    @Prop()
    size?: string;
    @Prop()
    background?: string;
    @Prop()
    image?: string;
    @Prop()
    imageWidth?: number;
    @Prop()
    imageHeight?: number;
    @Prop()
    imageOffsetX?: number;
    @Prop()
    imageOffsetY?: number;
    @Prop()
    imageClipped?: boolean;
    @Prop()
    position?: "front" | "back";
    @Prop()
    dropShadow?: ApexDropShadow;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radial-bar-track","shadow":true})
class ApexPlotOptionsRadialBarTrack {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const backgroundChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-track-background-list') ?? []
        this.background = (backgroundChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>> {
        return {
        	show: this.show,
        	startAngle: this.startAngle,
        	endAngle: this.endAngle,
        	strokeWidth: this.strokeWidth,
        	opacity: this.opacity,
        	margin: this.margin,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    startAngle?: number;
    @Prop()
    endAngle?: number;
    @Prop()
    strokeWidth?: string;
    @Prop()
    opacity?: number;
    @Prop()
    margin?: number;
    @Prop()
    background?: string | string[];
    @Prop()
    dropShadow?: ApexDropShadow;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radial-bar-track-background-list","shadow":true})
class ApexPlotOptionsRadialBarTrackBackgroundList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>['background'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radial-bar-track-background-item","shadow":true})
class ApexPlotOptionsRadialBarTrackBackgroundItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>['background'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radial-bar-data-labels","shadow":true})
class ApexPlotOptionsRadialBarDataLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const nameChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-data-labels-name') ?? []
        this.name = (nameChildren.at(0) as any)?.getData()
        const valueChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-data-labels-value') ?? []
        this.value = (valueChildren.at(0) as any)?.getData()
        const totalChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-data-labels-total') ?? []
        this.total = (totalChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>> {
        return {
        	show: this.show,
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

@Component({"tag":"apex-plot-options-radial-bar-data-labels-name","shadow":true})
class ApexPlotOptionsRadialBarDataLabelsName {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>['name'], undefined>> {
        return {
        	show: this.show,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        	color: this.color,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontSize?: string;
    @Prop()
    color?: string;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radial-bar-data-labels-value","shadow":true})
class ApexPlotOptionsRadialBarDataLabelsValue {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>['value'], undefined>> {
        return {
        	show: this.show,
        	fontFamily: this.fontFamily,
        	fontSize: this.fontSize,
        	fontWeight: this.fontWeight,
        	color: this.color,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontSize?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    color?: string;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radial-bar-data-labels-total","shadow":true})
class ApexPlotOptionsRadialBarDataLabelsTotal {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>['total'], undefined>> {
        return {
        	show: this.show,
        	label: this.label,
        	color: this.color,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    label?: string;
    @Prop()
    color?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontSize?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-plot-options-radial-bar-bar-labels","shadow":true})
class ApexPlotOptionsRadialBarBarLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['barLabels'], undefined>> {
        return {
        	enabled: this.enabled,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	useSeriesColors: this.useSeriesColors,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        	formatter: this.formatter,
        	onClick: this.onClick,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    useSeriesColors?: boolean;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontSize?: string;
    @Event()
    formatter?: (barName: string, opts?: any) => string;
    @Event()
    onClick?: (barName: string, opts?: any) => void;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-color-stop","shadow":true})
class ApexColorStop {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<globalThis.ApexColorStop> {
        return {
        	offset: this.offset,
        	color: this.color,
        	opacity: this.opacity,
        }
    }

    @Prop()
    offset: number = 0;
    @Prop()
    color: string = '';
    @Prop()
    opacity: number = 0;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill","shadow":true})
class ApexFill {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-colors-list') ?? []
        this.colors = colorsChildren.map(el => (el as any).getData())
        const opacityChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-opacity-list') ?? []
        this.opacity = (opacityChildren.at(0) as any)?.getData()
        const typeChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-type-list') ?? []
        this.type = (typeChildren.at(0) as any)?.getData()
        const gradientChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient') ?? []
        this.gradient = (gradientChildren.at(0) as any)?.getData()
        const imageChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-image') ?? []
        this.image = (imageChildren.at(0) as any)?.getData()
        const patternChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-pattern') ?? []
        this.pattern = (patternChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexFill> {
        return {
        }
    }

    @Prop()
    colors?: any[];
    @Prop()
    opacity?: number | number[];
    @Prop()
    type?: string | string[];
    @Prop()
    gradient?: { shade?: string | undefined; type?: string | undefined; shadeIntensity?: number | undefined; gradientToColors?: string[] | undefined; inverseColors?: boolean | undefined; opacityFrom?: number | number[] | undefined; opacityTo?: number | number[] | undefined; stops?: number[] | undefined; colorStops?: ApexColorStop[] | ApexColorStop[][] | undefined; };
    @Prop()
    image?: { src?: string | string[] | undefined; width?: number | undefined; height?: number | undefined; };
    @Prop()
    pattern?: { style?: string | string[] | undefined; width?: number | undefined; height?: number | undefined; strokeWidth?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-colors-list","shadow":true})
class ApexFillColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['colors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<any> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-colors-item","shadow":true})
class ApexFillColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['colors'], undefined>[0]> {
        return this.element.innerText as any
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-opacity-list","shadow":true})
class ApexFillOpacityList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexFill['opacity'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-opacity-item","shadow":true})
class ApexFillOpacityItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexFill['opacity'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-type-list","shadow":true})
class ApexFillTypeList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexFill['type'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-type-item","shadow":true})
class ApexFillTypeItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexFill['type'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient","shadow":true})
class ApexFillGradient {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const gradientToColorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-gradient-to-colors-list') ?? []
        this.gradientToColors = gradientToColorsChildren.map(el => (el as any).getData())
        const opacityFromChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-opacity-from-list') ?? []
        this.opacityFrom = (opacityFromChildren.at(0) as any)?.getData()
        const opacityToChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-opacity-to-list') ?? []
        this.opacityTo = (opacityToChildren.at(0) as any)?.getData()
        const stopsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-stops-list') ?? []
        this.stops = stopsChildren.map(el => (el as any).getData())
        const colorStopsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-gradient-color-stops-1-list') ?? []
        this.colorStops = (colorStopsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['gradient'], undefined>> {
        return {
        	shade: this.shade,
        	type: this.type,
        	shadeIntensity: this.shadeIntensity,
        	inverseColors: this.inverseColors,
        }
    }

    @Prop()
    shade?: string;
    @Prop()
    type?: string;
    @Prop()
    shadeIntensity?: number;
    @Prop()
    inverseColors?: boolean;
    @Prop()
    gradientToColors?: string[];
    @Prop()
    opacityFrom?: number | number[];
    @Prop()
    opacityTo?: number | number[];
    @Prop()
    stops?: number[];
    @Prop()
    colorStops?: ApexColorStop[] | ApexColorStop[][];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-gradient-to-colors-list","shadow":true})
class ApexFillGradientGradientToColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['gradientToColors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-gradient-to-colors-item","shadow":true})
class ApexFillGradientGradientToColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['gradientToColors'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-opacity-from-list","shadow":true})
class ApexFillGradientOpacityFromList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityFrom'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-opacity-from-item","shadow":true})
class ApexFillGradientOpacityFromItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityFrom'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-opacity-to-list","shadow":true})
class ApexFillGradientOpacityToList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityTo'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-opacity-to-item","shadow":true})
class ApexFillGradientOpacityToItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityTo'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-stops-list","shadow":true})
class ApexFillGradientStopsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['stops'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-stops-item","shadow":true})
class ApexFillGradientStopsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['stops'], undefined>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-color-stops-1-list","shadow":true})
class ApexFillGradientColorStops1List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, ApexColorStop[][]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<ApexColorStop[]> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-color-stops-1-item-list","shadow":true})
class ApexFillGradientColorStops1ItemList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, ApexColorStop[][]>[0]> {
        return this.listItems
    }

    @Prop()
    listItems: Array<ApexColorStop> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-gradient-color-stops-2-list","shadow":true})
class ApexFillGradientColorStops2List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, ApexColorStop[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<ApexColorStop> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-image","shadow":true})
class ApexFillImage {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const srcChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-image-src-list') ?? []
        this.src = (srcChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['image'], undefined>> {
        return {
        	width: this.width,
        	height: this.height,
        }
    }

    @Prop()
    width?: number;
    @Prop()
    height?: number;
    @Prop()
    src?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-image-src-list","shadow":true})
class ApexFillImageSrcList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['image'], undefined>['src'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-image-src-item","shadow":true})
class ApexFillImageSrcItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['image'], undefined>['src'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-pattern","shadow":true})
class ApexFillPattern {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-pattern-style-list') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['pattern'], undefined>> {
        return {
        	width: this.width,
        	height: this.height,
        	strokeWidth: this.strokeWidth,
        }
    }

    @Prop()
    width?: number;
    @Prop()
    height?: number;
    @Prop()
    strokeWidth?: number;
    @Prop()
    style?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-pattern-style-list","shadow":true})
class ApexFillPatternStyleList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['pattern'], undefined>['style'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-fill-pattern-style-item","shadow":true})
class ApexFillPatternStyleItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['pattern'], undefined>['style'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend","shadow":true})
class ApexLegend {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const customLegendItemsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-custom-legend-items-list') ?? []
        this.customLegendItems = customLegendItemsChildren.map(el => (el as any).getData())
        const labelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-labels') ?? []
        this.labels = (labelsChildren.at(0) as any)?.getData()
        const markersChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-markers') ?? []
        this.markers = (markersChildren.at(0) as any)?.getData()
        const itemMarginChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-item-margin') ?? []
        this.itemMargin = (itemMarginChildren.at(0) as any)?.getData()
        const onItemClickChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-on-item-click') ?? []
        this.onItemClick = (onItemClickChildren.at(0) as any)?.getData()
        const onItemHoverChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-on-item-hover') ?? []
        this.onItemHover = (onItemHoverChildren.at(0) as any)?.getData()
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

@Component({"tag":"apex-legend-custom-legend-items-list","shadow":true})
class ApexLegendCustomLegendItemsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['customLegendItems'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-custom-legend-items-item","shadow":true})
class ApexLegendCustomLegendItemsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['customLegendItems'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-labels","shadow":true})
class ApexLegendLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-labels-colors-list') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['labels'], undefined>> {
        return {
        	useSeriesColors: this.useSeriesColors,
        }
    }

    @Prop()
    useSeriesColors?: boolean;
    @Prop()
    colors?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-labels-colors-list","shadow":true})
class ApexLegendLabelsColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexLegend['labels'], undefined>['colors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-labels-colors-item","shadow":true})
class ApexLegendLabelsColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexLegend['labels'], undefined>['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-markers","shadow":true})
class ApexLegendMarkers {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const fillColorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-legend-markers-fill-colors-list') ?? []
        this.fillColors = fillColorsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['markers'], undefined>> {
        return {
        	size: this.size,
        	strokeWidth: this.strokeWidth,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    size?: number;
    @Prop()
    strokeWidth?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    fillColors?: string[];
    @Prop()
    shape?: ApexMarkerShape;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-markers-fill-colors-list","shadow":true})
class ApexLegendMarkersFillColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLegend['markers'], undefined>['fillColors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-markers-fill-colors-item","shadow":true})
class ApexLegendMarkersFillColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLegend['markers'], undefined>['fillColors'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-item-margin","shadow":true})
class ApexLegendItemMargin {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['itemMargin'], undefined>> {
        return {
        	horizontal: this.horizontal,
        	vertical: this.vertical,
        }
    }

    @Prop()
    horizontal?: number;
    @Prop()
    vertical?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-on-item-click","shadow":true})
class ApexLegendOnItemClick {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['onItemClick'], undefined>> {
        return {
        	toggleDataSeries: this.toggleDataSeries,
        }
    }

    @Prop()
    toggleDataSeries?: boolean;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-legend-on-item-hover","shadow":true})
class ApexLegendOnItemHover {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['onItemHover'], undefined>> {
        return {
        	highlightDataSeries: this.highlightDataSeries,
        }
    }

    @Prop()
    highlightDataSeries?: boolean;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-marker-shape-list","shadow":true})
class ApexMarkerShapeList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<globalThis.ApexMarkerShape, MarkerShapeOptions[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<MarkerShapeOptions> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-discrete-point","shadow":true})
class ApexDiscretePoint {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<globalThis.ApexDiscretePoint> {
        return {
        	seriesIndex: this.seriesIndex,
        	dataPointIndex: this.dataPointIndex,
        	fillColor: this.fillColor,
        	strokeColor: this.strokeColor,
        	size: this.size,
        }
    }

    @Prop()
    seriesIndex?: number;
    @Prop()
    dataPointIndex?: number;
    @Prop()
    fillColor?: string;
    @Prop()
    strokeColor?: string;
    @Prop()
    size?: number;
    @Prop()
    shape?: ApexMarkerShape;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers","shadow":true})
class ApexMarkers {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const sizeChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-size-list') ?? []
        this.size = (sizeChildren.at(0) as any)?.getData()
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-colors-list') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
        const strokeColorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-stroke-colors-list') ?? []
        this.strokeColors = (strokeColorsChildren.at(0) as any)?.getData()
        const strokeWidthChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-stroke-width-list') ?? []
        this.strokeWidth = (strokeWidthChildren.at(0) as any)?.getData()
        const strokeOpacityChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-stroke-opacity-list') ?? []
        this.strokeOpacity = (strokeOpacityChildren.at(0) as any)?.getData()
        const strokeDashArrayChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-stroke-dash-array-list') ?? []
        this.strokeDashArray = (strokeDashArrayChildren.at(0) as any)?.getData()
        const fillOpacityChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-fill-opacity-list') ?? []
        this.fillOpacity = (fillOpacityChildren.at(0) as any)?.getData()
        const discreteChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-discrete-list') ?? []
        this.discrete = discreteChildren.map(el => (el as any).getData())
        const hoverChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-hover') ?? []
        this.hover = (hoverChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexMarkers> {
        return {
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	showNullDataPoints: this.showNullDataPoints,
        }
    }

    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    showNullDataPoints?: boolean;
    @Prop()
    size?: number | number[];
    @Prop()
    colors?: string | string[];
    @Prop()
    strokeColors?: string | string[];
    @Prop()
    strokeWidth?: number | number[];
    @Prop()
    strokeOpacity?: number | number[];
    @Prop()
    strokeDashArray?: number | number[];
    @Prop()
    fillOpacity?: number | number[];
    @Prop()
    discrete?: ApexDiscretePoint[];
    @Prop()
    shape?: ApexMarkerShape;
    @Prop()
    hover?: { size?: number | undefined; sizeOffset?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-size-list","shadow":true})
class ApexMarkersSizeList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['size'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-size-item","shadow":true})
class ApexMarkersSizeItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['size'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-colors-list","shadow":true})
class ApexMarkersColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['colors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-colors-item","shadow":true})
class ApexMarkersColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-stroke-colors-list","shadow":true})
class ApexMarkersStrokeColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeColors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-stroke-colors-item","shadow":true})
class ApexMarkersStrokeColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeColors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-stroke-width-list","shadow":true})
class ApexMarkersStrokeWidthList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeWidth'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-stroke-width-item","shadow":true})
class ApexMarkersStrokeWidthItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeWidth'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-stroke-opacity-list","shadow":true})
class ApexMarkersStrokeOpacityList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeOpacity'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-stroke-opacity-item","shadow":true})
class ApexMarkersStrokeOpacityItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeOpacity'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-stroke-dash-array-list","shadow":true})
class ApexMarkersStrokeDashArrayList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeDashArray'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-stroke-dash-array-item","shadow":true})
class ApexMarkersStrokeDashArrayItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeDashArray'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-fill-opacity-list","shadow":true})
class ApexMarkersFillOpacityList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['fillOpacity'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-fill-opacity-item","shadow":true})
class ApexMarkersFillOpacityItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['fillOpacity'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-discrete-list","shadow":true})
class ApexMarkersDiscreteList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexMarkers['discrete'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<ApexDiscretePoint> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-markers-hover","shadow":true})
class ApexMarkersHover {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexMarkers['hover'], undefined>> {
        return {
        	size: this.size,
        	sizeOffset: this.sizeOffset,
        }
    }

    @Prop()
    size?: number;
    @Prop()
    sizeOffset?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-no-data","shadow":true})
class ApexNoData {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-no-data-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexNoData> {
        return {
        	text: this.text,
        	align: this.align,
        	verticalAlign: this.verticalAlign,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    text?: string;
    @Prop()
    align?: "left" | "right" | "center";
    @Prop()
    verticalAlign?: "top" | "middle" | "bottom";
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-no-data-style","shadow":true})
class ApexNoDataStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexNoData['style'], undefined>> {
        return {
        	color: this.color,
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-parsing","shadow":true})
class ApexParsing {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const yChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-parsing-y-list') ?? []
        this.y = (yChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexParsing> {
        return {
        	x: this.x,
        	z: this.z,
        }
    }

    @Prop()
    x?: string;
    @Prop()
    z?: string;
    @Prop()
    y?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-parsing-y-list","shadow":true})
class ApexParsingYList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexParsing['y'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-parsing-y-item","shadow":true})
class ApexParsingYItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexParsing['y'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-data-labels","shadow":true})
class ApexDataLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const enabledOnSeriesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-data-labels-enabled-on-series-list') ?? []
        this.enabledOnSeries = (enabledOnSeriesChildren.at(0) as any)?.getData()
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-data-labels-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
        const backgroundChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-data-labels-background') ?? []
        this.background = (backgroundChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexDataLabels> {
        return {
        	enabled: this.enabled,
        	textAnchor: this.textAnchor,
        	distributed: this.distributed,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    textAnchor?: "start" | "middle" | "end";
    @Prop()
    distributed?: boolean;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    enabledOnSeries?: number[] | undefined;
    @Prop()
    style?: { fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; colors?: any[] | undefined; };
    @Prop()
    background?: { enabled?: boolean | undefined; foreColor?: string | undefined; backgroundColor?: string | undefined; borderRadius?: number | undefined; padding?: number | undefined; opacity?: number | undefined; borderWidth?: number | undefined; borderColor?: string | undefined; dropShadow?: ApexDropShadow | undefined; };
    @Prop()
    dropShadow?: ApexDropShadow;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-data-labels-enabled-on-series-list","shadow":true})
class ApexDataLabelsEnabledOnSeriesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexDataLabels['enabledOnSeries'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-data-labels-enabled-on-series-item","shadow":true})
class ApexDataLabelsEnabledOnSeriesItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexDataLabels['enabledOnSeries'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-data-labels-style","shadow":true})
class ApexDataLabelsStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-data-labels-style-colors-list') ?? []
        this.colors = colorsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexDataLabels['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    colors?: any[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-data-labels-style-colors-list","shadow":true})
class ApexDataLabelsStyleColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexDataLabels['style'], undefined>['colors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<any> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-data-labels-style-colors-item","shadow":true})
class ApexDataLabelsStyleColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexDataLabels['style'], undefined>['colors'], undefined>[0]> {
        return this.element.innerText as any
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-data-labels-background","shadow":true})
class ApexDataLabelsBackground {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexDataLabels['background'], undefined>> {
        return {
        	enabled: this.enabled,
        	foreColor: this.foreColor,
        	backgroundColor: this.backgroundColor,
        	borderRadius: this.borderRadius,
        	padding: this.padding,
        	opacity: this.opacity,
        	borderWidth: this.borderWidth,
        	borderColor: this.borderColor,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    foreColor?: string;
    @Prop()
    backgroundColor?: string;
    @Prop()
    borderRadius?: number;
    @Prop()
    padding?: number;
    @Prop()
    opacity?: number;
    @Prop()
    borderWidth?: number;
    @Prop()
    borderColor?: string;
    @Prop()
    dropShadow?: ApexDropShadow;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-responsive","shadow":true})
class ApexResponsive {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<globalThis.ApexResponsive> {
        return {
        	breakpoint: this.breakpoint,
        	options: this.options,
        }
    }

    @Prop()
    breakpoint?: number;
    @Prop()
    options?: any;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-y","shadow":true})
class ApexTooltipY {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const titleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-y-title') ?? []
        this.title = (titleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexTooltipY> {
        return {
        }
    }

    @Prop()
    title?: { formatter?(seriesName: string, opts?: any): string; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-y-title","shadow":true})
class ApexTooltipYTitle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltipY['title'], undefined>> {
        return {
        }
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip","shadow":true})
class ApexTooltip {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const enabledOnSeriesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-enabled-on-series-list') ?? []
        this.enabledOnSeries = (enabledOnSeriesChildren.at(0) as any)?.getData()
        const customChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-custom-list') ?? []
        this.custom = (customChildren.at(0) as any)?.getData()
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
        const onDatasetHoverChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-on-dataset-hover') ?? []
        this.onDatasetHover = (onDatasetHoverChildren.at(0) as any)?.getData()
        const xChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-x') ?? []
        this.x = (xChildren.at(0) as any)?.getData()
        const yChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-y-list') ?? []
        this.y = (yChildren.at(0) as any)?.getData()
        const zChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-z') ?? []
        this.z = (zChildren.at(0) as any)?.getData()
        const markerChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-marker') ?? []
        this.marker = (markerChildren.at(0) as any)?.getData()
        const itemsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-items') ?? []
        this.items = (itemsChildren.at(0) as any)?.getData()
        const fixedChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-fixed') ?? []
        this.fixed = (fixedChildren.at(0) as any)?.getData()
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

@Component({"tag":"apex-tooltip-enabled-on-series-list","shadow":true})
class ApexTooltipEnabledOnSeriesList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexTooltip['enabledOnSeries'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-enabled-on-series-item","shadow":true})
class ApexTooltipEnabledOnSeriesItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexTooltip['enabledOnSeries'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-custom-list","shadow":true})
class ApexTooltipCustomList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexTooltip['custom'], undefined>, ((options: any) => any)[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<((options: any) => any)> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-style","shadow":true})
class ApexTooltipStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-on-dataset-hover","shadow":true})
class ApexTooltipOnDatasetHover {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['onDatasetHover'], undefined>> {
        return {
        	highlightDataSeries: this.highlightDataSeries,
        }
    }

    @Prop()
    highlightDataSeries?: boolean;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-x","shadow":true})
class ApexTooltipX {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['x'], undefined>> {
        return {
        	show: this.show,
        	format: this.format,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    format?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-y-list","shadow":true})
class ApexTooltipYList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexTooltip['y'], undefined>, ApexTooltipY[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<ApexTooltipY> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-z","shadow":true})
class ApexTooltipZ {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['z'], undefined>> {
        return {
        	title: this.title,
        }
    }

    @Prop()
    title?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-marker","shadow":true})
class ApexTooltipMarker {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const fillColorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-tooltip-marker-fill-colors-list') ?? []
        this.fillColors = fillColorsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['marker'], undefined>> {
        return {
        	show: this.show,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    fillColors?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-marker-fill-colors-list","shadow":true})
class ApexTooltipMarkerFillColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexTooltip['marker'], undefined>['fillColors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-marker-fill-colors-item","shadow":true})
class ApexTooltipMarkerFillColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexTooltip['marker'], undefined>['fillColors'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-items","shadow":true})
class ApexTooltipItems {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['items'], undefined>> {
        return {
        	display: this.display,
        }
    }

    @Prop()
    display?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-tooltip-fixed","shadow":true})
class ApexTooltipFixed {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['fixed'], undefined>> {
        return {
        	enabled: this.enabled,
        	position: this.position,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    position?: string;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis","shadow":true})
class ApexXAxis {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const overwriteCategoriesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-overwrite-categories-1-list') ?? []
        this.overwriteCategories = (overwriteCategoriesChildren.at(0) as any)?.getData()
        const labelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-labels') ?? []
        this.labels = (labelsChildren.at(0) as any)?.getData()
        const groupChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-group') ?? []
        this.group = (groupChildren.at(0) as any)?.getData()
        const axisBorderChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-axis-border') ?? []
        this.axisBorder = (axisBorderChildren.at(0) as any)?.getData()
        const axisTicksChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-axis-ticks') ?? []
        this.axisTicks = (axisTicksChildren.at(0) as any)?.getData()
        const titleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-title') ?? []
        this.title = (titleChildren.at(0) as any)?.getData()
        const crosshairsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs') ?? []
        this.crosshairs = (crosshairsChildren.at(0) as any)?.getData()
        const tooltipChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-tooltip') ?? []
        this.tooltip = (tooltipChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexXAxis> {
        return {
        	type: this.type,
        	categories: this.categories,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	sorted: this.sorted,
        	tickPlacement: this.tickPlacement,
        	tickAmount: this.tickAmount,
        	stepSize: this.stepSize,
        	min: this.min,
        	max: this.max,
        	range: this.range,
        	floating: this.floating,
        	decimalsInFloat: this.decimalsInFloat,
        	position: this.position,
        }
    }

    @Prop()
    type?: "category" | "datetime" | "numeric";
    @Prop()
    categories?: any;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    sorted?: boolean;
    @Prop()
    tickPlacement?: string;
    @Prop()
    tickAmount?: number | "dataPoints";
    @Prop()
    stepSize?: number;
    @Prop()
    min?: number;
    @Prop()
    max?: number;
    @Prop()
    range?: number;
    @Prop()
    floating?: boolean;
    @Prop()
    decimalsInFloat?: number;
    @Prop()
    position?: string;
    @Prop()
    overwriteCategories?: number[] | string[] | undefined;
    @Prop()
    labels?: { show?: boolean | undefined; rotate?: number | undefined; rotateAlways?: boolean | undefined; hideOverlappingLabels?: boolean | undefined; showDuplicates?: boolean | undefined; trim?: boolean | undefined; minHeight?: number | undefined; maxHeight?: number | undefined; style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; } | undefined; offsetX?: number | undefined; offsetY?: number | undefined; format?: string | undefined; formatter?(value: string, timestamp?: number | undefined, opts?: any): string | string[]; datetimeUTC?: boolean | undefined; datetimeFormatter?: { year?: string | undefined; month?: string | undefined; day?: string | undefined; hour?: string | undefined; minute?: string | undefined; second?: string | undefined; } | undefined; };
    @Prop()
    group?: { groups?: { title: string; cols: number; }[] | undefined; style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; } | undefined; };
    @Prop()
    axisBorder?: { show?: boolean | undefined; color?: string | undefined; height?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };
    @Prop()
    axisTicks?: { show?: boolean | undefined; borderType?: string | undefined; color?: string | undefined; height?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };
    @Prop()
    title?: { text?: string | undefined; offsetX?: number | undefined; offsetY?: number | undefined; style?: { color?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; cssClass?: string | undefined; } | undefined; };
    @Prop()
    crosshairs?: { show?: boolean | undefined; width?: string | number | undefined; position?: string | undefined; opacity?: number | undefined; stroke?: { color?: string | undefined; width?: number | undefined; dashArray?: number | undefined; } | undefined; fill?: { type?: string | undefined; color?: string | undefined; gradient?: { colorFrom?: string | undefined; colorTo?: string | undefined; stops?: number[] | undefined; opacityFrom?: number | undefined; opacityTo?: number | undefined; } | undefined; } | undefined; dropShadow?: ApexDropShadow | undefined; };
    @Prop()
    tooltip?: { enabled?: boolean | undefined; offsetY?: number | undefined; formatter?(value: string, opts?: object | undefined): string; style?: { fontSize?: string | undefined; fontFamily?: string | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-overwrite-categories-1-list","shadow":true})
class ApexXAxisOverwriteCategories1List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, number[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-overwrite-categories-1-item","shadow":true})
class ApexXAxisOverwriteCategories1Item {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-overwrite-categories-2-list","shadow":true})
class ApexXAxisOverwriteCategories2List {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-overwrite-categories-2-item","shadow":true})
class ApexXAxisOverwriteCategories2Item {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-labels","shadow":true})
class ApexXAxisLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-labels-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
        const datetimeFormatterChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-labels-datetime-formatter') ?? []
        this.datetimeFormatter = (datetimeFormatterChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['labels'], undefined>> {
        return {
        	show: this.show,
        	rotate: this.rotate,
        	rotateAlways: this.rotateAlways,
        	hideOverlappingLabels: this.hideOverlappingLabels,
        	showDuplicates: this.showDuplicates,
        	trim: this.trim,
        	minHeight: this.minHeight,
        	maxHeight: this.maxHeight,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	format: this.format,
        	datetimeUTC: this.datetimeUTC,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    rotate?: number;
    @Prop()
    rotateAlways?: boolean;
    @Prop()
    hideOverlappingLabels?: boolean;
    @Prop()
    showDuplicates?: boolean;
    @Prop()
    trim?: boolean;
    @Prop()
    minHeight?: number;
    @Prop()
    maxHeight?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    format?: string;
    @Prop()
    datetimeUTC?: boolean;
    @Prop()
    style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; };
    @Prop()
    datetimeFormatter?: { year?: string | undefined; month?: string | undefined; day?: string | undefined; hour?: string | undefined; minute?: string | undefined; second?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-labels-style","shadow":true})
class ApexXAxisLabelsStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-labels-style-colors-list') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    cssClass?: string;
    @Prop()
    colors?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-labels-style-colors-list","shadow":true})
class ApexXAxisLabelsStyleColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-labels-style-colors-item","shadow":true})
class ApexXAxisLabelsStyleColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-labels-datetime-formatter","shadow":true})
class ApexXAxisLabelsDatetimeFormatter {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['datetimeFormatter'], undefined>> {
        return {
        	year: this.year,
        	month: this.month,
        	day: this.day,
        	hour: this.hour,
        	minute: this.minute,
        	second: this.second,
        }
    }

    @Prop()
    year?: string;
    @Prop()
    month?: string;
    @Prop()
    day?: string;
    @Prop()
    hour?: string;
    @Prop()
    minute?: string;
    @Prop()
    second?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-group","shadow":true})
class ApexXAxisGroup {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const groupsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-group-groups-list') ?? []
        this.groups = groupsChildren.map(el => (el as any).getData())
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-group-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['group'], undefined>> {
        return {
        }
    }

    @Prop()
    groups?: { title: string; cols: number; }[];
    @Prop()
    style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-group-groups-list","shadow":true})
class ApexXAxisGroupGroupsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['groups'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<{ title: string, cols: number }> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-group-groups-item","shadow":true})
class ApexXAxisGroupGroupsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['groups'], undefined>[0]> {
        return {
        	title: this.title,
        	cols: this.cols,
        }
    }

    @Prop()
    title: string = '';
    @Prop()
    cols: number = 0;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-group-style","shadow":true})
class ApexXAxisGroupStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-group-style-colors-list') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    cssClass?: string;
    @Prop()
    colors?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-group-style-colors-list","shadow":true})
class ApexXAxisGroupStyleColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['style'], undefined>['colors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-group-style-colors-item","shadow":true})
class ApexXAxisGroupStyleColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['style'], undefined>['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-axis-border","shadow":true})
class ApexXAxisAxisBorder {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['axisBorder'], undefined>> {
        return {
        	show: this.show,
        	color: this.color,
        	height: this.height,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    color?: string;
    @Prop()
    height?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-axis-ticks","shadow":true})
class ApexXAxisAxisTicks {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['axisTicks'], undefined>> {
        return {
        	show: this.show,
        	borderType: this.borderType,
        	color: this.color,
        	height: this.height,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    borderType?: string;
    @Prop()
    color?: string;
    @Prop()
    height?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-title","shadow":true})
class ApexXAxisTitle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-title-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['title'], undefined>> {
        return {
        	text: this.text,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    text?: string;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { color?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; cssClass?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-title-style","shadow":true})
class ApexXAxisTitleStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['title'], undefined>['style'], undefined>> {
        return {
        	color: this.color,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	fontSize: this.fontSize,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontSize?: string;
    @Prop()
    cssClass?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-crosshairs","shadow":true})
class ApexXAxisCrosshairs {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const strokeChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs-stroke') ?? []
        this.stroke = (strokeChildren.at(0) as any)?.getData()
        const fillChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs-fill') ?? []
        this.fill = (fillChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>> {
        return {
        	show: this.show,
        	width: this.width,
        	position: this.position,
        	opacity: this.opacity,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    width?: string | number;
    @Prop()
    position?: string;
    @Prop()
    opacity?: number;
    @Prop()
    stroke?: { color?: string | undefined; width?: number | undefined; dashArray?: number | undefined; };
    @Prop()
    fill?: { type?: string | undefined; color?: string | undefined; gradient?: { colorFrom?: string | undefined; colorTo?: string | undefined; stops?: number[] | undefined; opacityFrom?: number | undefined; opacityTo?: number | undefined; } | undefined; };
    @Prop()
    dropShadow?: ApexDropShadow;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-crosshairs-stroke","shadow":true})
class ApexXAxisCrosshairsStroke {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['stroke'], undefined>> {
        return {
        	color: this.color,
        	width: this.width,
        	dashArray: this.dashArray,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    width?: number;
    @Prop()
    dashArray?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-crosshairs-fill","shadow":true})
class ApexXAxisCrosshairsFill {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const gradientChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs-fill-gradient') ?? []
        this.gradient = (gradientChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>> {
        return {
        	type: this.type,
        	color: this.color,
        }
    }

    @Prop()
    type?: string;
    @Prop()
    color?: string;
    @Prop()
    gradient?: { colorFrom?: string | undefined; colorTo?: string | undefined; stops?: number[] | undefined; opacityFrom?: number | undefined; opacityTo?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-crosshairs-fill-gradient","shadow":true})
class ApexXAxisCrosshairsFillGradient {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const stopsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs-fill-gradient-stops-list') ?? []
        this.stops = stopsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>['gradient'], undefined>> {
        return {
        	colorFrom: this.colorFrom,
        	colorTo: this.colorTo,
        	opacityFrom: this.opacityFrom,
        	opacityTo: this.opacityTo,
        }
    }

    @Prop()
    colorFrom?: string;
    @Prop()
    colorTo?: string;
    @Prop()
    opacityFrom?: number;
    @Prop()
    opacityTo?: number;
    @Prop()
    stops?: number[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-crosshairs-fill-gradient-stops-list","shadow":true})
class ApexXAxisCrosshairsFillGradientStopsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>['gradient'], undefined>['stops'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<number> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-crosshairs-fill-gradient-stops-item","shadow":true})
class ApexXAxisCrosshairsFillGradientStopsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>['gradient'], undefined>['stops'], undefined>[0]> {
        return parseFloat(this.element.innerText)
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-tooltip","shadow":true})
class ApexXAxisTooltip {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-tooltip-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['tooltip'], undefined>> {
        return {
        	enabled: this.enabled,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { fontSize?: string | undefined; fontFamily?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-x-axis-tooltip-style","shadow":true})
class ApexXAxisTooltipStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['tooltip'], undefined>['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis","shadow":true})
class ApexYAxis {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const seriesNameChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-series-name-list') ?? []
        this.seriesName = (seriesNameChildren.at(0) as any)?.getData()
        const labelsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-labels') ?? []
        this.labels = (labelsChildren.at(0) as any)?.getData()
        const axisBorderChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-axis-border') ?? []
        this.axisBorder = (axisBorderChildren.at(0) as any)?.getData()
        const axisTicksChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-axis-ticks') ?? []
        this.axisTicks = (axisTicksChildren.at(0) as any)?.getData()
        const titleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-title') ?? []
        this.title = (titleChildren.at(0) as any)?.getData()
        const crosshairsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-crosshairs') ?? []
        this.crosshairs = (crosshairsChildren.at(0) as any)?.getData()
        const tooltipChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-tooltip') ?? []
        this.tooltip = (tooltipChildren.at(0) as any)?.getData()
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
        	min: this.min,
        	max: this.max,
        	floating: this.floating,
        	decimalsInFloat: this.decimalsInFloat,
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
    min?: number | ((min: number) => number);
    @Prop()
    max?: number | ((max: number) => number);
    @Prop()
    floating?: boolean;
    @Prop()
    decimalsInFloat?: number;
    @Prop()
    seriesName?: string | string[];
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

@Component({"tag":"apex-y-axis-series-name-list","shadow":true})
class ApexYAxisSeriesNameList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexYAxis['seriesName'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-series-name-item","shadow":true})
class ApexYAxisSeriesNameItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexYAxis['seriesName'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-labels","shadow":true})
class ApexYAxisLabels {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-labels-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexYAxis['labels'], undefined>> {
        return {
        	show: this.show,
        	showDuplicates: this.showDuplicates,
        	minWidth: this.minWidth,
        	maxWidth: this.maxWidth,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	rotate: this.rotate,
        	align: this.align,
        	padding: this.padding,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    showDuplicates?: boolean;
    @Prop()
    minWidth?: number;
    @Prop()
    maxWidth?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    rotate?: number;
    @Prop()
    align?: "left" | "center" | "right";
    @Prop()
    padding?: number;
    @Prop()
    style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontWeight?: string | number | undefined; fontFamily?: string | undefined; cssClass?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-labels-style","shadow":true})
class ApexYAxisLabelsStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-labels-style-colors-list') ?? []
        this.colors = (colorsChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexYAxis['labels'], undefined>['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontWeight: this.fontWeight,
        	fontFamily: this.fontFamily,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontFamily?: string;
    @Prop()
    cssClass?: string;
    @Prop()
    colors?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-labels-style-colors-list","shadow":true})
class ApexYAxisLabelsStyleColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexYAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-labels-style-colors-item","shadow":true})
class ApexYAxisLabelsStyleColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexYAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-axis-border","shadow":true})
class ApexYAxisAxisBorder {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexYAxis['axisBorder'], undefined>> {
        return {
        	show: this.show,
        	color: this.color,
        	width: this.width,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    color?: string;
    @Prop()
    width?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-axis-ticks","shadow":true})
class ApexYAxisAxisTicks {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexYAxis['axisTicks'], undefined>> {
        return {
        	show: this.show,
        	color: this.color,
        	width: this.width,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    color?: string;
    @Prop()
    width?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-title","shadow":true})
class ApexYAxisTitle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const styleChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-title-style') ?? []
        this.style = (styleChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexYAxis['title'], undefined>> {
        return {
        	text: this.text,
        	rotate: this.rotate,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    text?: string;
    @Prop()
    rotate?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { color?: string | undefined; fontSize?: string | undefined; fontWeight?: string | number | undefined; fontFamily?: string | undefined; cssClass?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-title-style","shadow":true})
class ApexYAxisTitleStyle {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexYAxis['title'], undefined>['style'], undefined>> {
        return {
        	color: this.color,
        	fontSize: this.fontSize,
        	fontWeight: this.fontWeight,
        	fontFamily: this.fontFamily,
        	cssClass: this.cssClass,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    fontSize?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontFamily?: string;
    @Prop()
    cssClass?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-crosshairs","shadow":true})
class ApexYAxisCrosshairs {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const strokeChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-crosshairs-stroke') ?? []
        this.stroke = (strokeChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexYAxis['crosshairs'], undefined>> {
        return {
        	show: this.show,
        	position: this.position,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    position?: string;
    @Prop()
    stroke?: { color?: string | undefined; width?: number | undefined; dashArray?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-crosshairs-stroke","shadow":true})
class ApexYAxisCrosshairsStroke {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexYAxis['crosshairs'], undefined>['stroke'], undefined>> {
        return {
        	color: this.color,
        	width: this.width,
        	dashArray: this.dashArray,
        }
    }

    @Prop()
    color?: string;
    @Prop()
    width?: number;
    @Prop()
    dashArray?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-y-axis-tooltip","shadow":true})
class ApexYAxisTooltip {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexYAxis['tooltip'], undefined>> {
        return {
        	enabled: this.enabled,
        	offsetX: this.offsetX,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    offsetX?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-forecast-data-points","shadow":true})
class ApexForecastDataPoints {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<globalThis.ApexForecastDataPoints> {
        return {
        	count: this.count,
        	fillOpacity: this.fillOpacity,
        	strokeWidth: this.strokeWidth,
        	dashArray: this.dashArray,
        }
    }

    @Prop()
    count?: number;
    @Prop()
    fillOpacity?: number;
    @Prop()
    strokeWidth?: number | undefined;
    @Prop()
    dashArray?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid","shadow":true})
class ApexGrid {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const xaxisChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-xaxis') ?? []
        this.xaxis = (xaxisChildren.at(0) as any)?.getData()
        const yaxisChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-yaxis') ?? []
        this.yaxis = (yaxisChildren.at(0) as any)?.getData()
        const rowChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-row') ?? []
        this.row = (rowChildren.at(0) as any)?.getData()
        const columnChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-column') ?? []
        this.column = (columnChildren.at(0) as any)?.getData()
        const paddingChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-padding') ?? []
        this.padding = (paddingChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexGrid> {
        return {
        	show: this.show,
        	borderColor: this.borderColor,
        	strokeDashArray: this.strokeDashArray,
        	position: this.position,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    borderColor?: string;
    @Prop()
    strokeDashArray?: number;
    @Prop()
    position?: "front" | "back";
    @Prop()
    xaxis?: { lines?: { show?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; } | undefined; };
    @Prop()
    yaxis?: { lines?: { show?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; } | undefined; };
    @Prop()
    row?: { colors?: string[] | undefined; opacity?: number | undefined; };
    @Prop()
    column?: { colors?: string[] | undefined; opacity?: number | undefined; };
    @Prop()
    padding?: { top?: number | undefined; right?: number | undefined; bottom?: number | undefined; left?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-xaxis","shadow":true})
class ApexGridXaxis {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const linesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-xaxis-lines') ?? []
        this.lines = (linesChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['xaxis'], undefined>> {
        return {
        }
    }

    @Prop()
    lines?: { show?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-xaxis-lines","shadow":true})
class ApexGridXaxisLines {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['xaxis'], undefined>['lines'], undefined>> {
        return {
        	show: this.show,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-yaxis","shadow":true})
class ApexGridYaxis {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const linesChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-yaxis-lines') ?? []
        this.lines = (linesChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['yaxis'], undefined>> {
        return {
        }
    }

    @Prop()
    lines?: { show?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-yaxis-lines","shadow":true})
class ApexGridYaxisLines {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['yaxis'], undefined>['lines'], undefined>> {
        return {
        	show: this.show,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-row","shadow":true})
class ApexGridRow {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-row-colors-list') ?? []
        this.colors = colorsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['row'], undefined>> {
        return {
        	opacity: this.opacity,
        }
    }

    @Prop()
    opacity?: number;
    @Prop()
    colors?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-row-colors-list","shadow":true})
class ApexGridRowColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['row'], undefined>['colors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-row-colors-item","shadow":true})
class ApexGridRowColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['row'], undefined>['colors'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-column","shadow":true})
class ApexGridColumn {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const colorsChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-column-colors-list') ?? []
        this.colors = colorsChildren.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['column'], undefined>> {
        return {
        	opacity: this.opacity,
        }
    }

    @Prop()
    opacity?: number;
    @Prop()
    colors?: string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-column-colors-list","shadow":true})
class ApexGridColumnColorsList {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const listItems: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'TODO') ?? []
        this.listItems = listItems.map(el => (el as any).getData())
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['column'], undefined>['colors'], undefined>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-column-colors-item","shadow":true})
class ApexGridColumnColorsItem {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['column'], undefined>['colors'], undefined>[0]> {
        return this.element.innerText
    }

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-grid-padding","shadow":true})
class ApexGridPadding {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['padding'], undefined>> {
        return {
        	top: this.top,
        	right: this.right,
        	bottom: this.bottom,
        	left: this.left,
        }
    }

    @Prop()
    top?: number;
    @Prop()
    right?: number;
    @Prop()
    bottom?: number;
    @Prop()
    left?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-theme","shadow":true})
class ApexTheme {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
        const monochromeChildren: Array</*HTML*/Element> = this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-theme-monochrome') ?? []
        this.monochrome = (monochromeChildren.at(0) as any)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexTheme> {
        return {
        	mode: this.mode,
        	palette: this.palette,
        }
    }

    @Prop()
    mode?: "light" | "dark";
    @Prop()
    palette?: string;
    @Prop()
    monochrome?: { enabled?: boolean | undefined; color?: string | undefined; shadeTo?: "light" | "dark" | undefined; shadeIntensity?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}

@Component({"tag":"apex-theme-monochrome","shadow":true})
class ApexThemeMonochrome {
    @Element()
    element!: HTMLElement;
    @Element()
    slotElement!: HTMLSlotElement;

    componentDidLoad() {
        this.slotElement = this.element.shadowRoot?.querySelector('slot') as HTMLSlotElement
        this.updateChildren()
        this.observeChildren()
    }

    observeChildren() {
        this.slotElement?.addEventListener('slotchange', () => this.updateChildren())
    }

    updateChildren() {
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTheme['monochrome'], undefined>> {
        return {
        	enabled: this.enabled,
        	color: this.color,
        	shadeTo: this.shadeTo,
        	shadeIntensity: this.shadeIntensity,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    color?: string;
    @Prop()
    shadeTo?: "light" | "dark";
    @Prop()
    shadeIntensity?: number;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
