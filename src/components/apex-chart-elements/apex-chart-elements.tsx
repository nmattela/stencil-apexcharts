import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Element } from "@stencil/core";

abstract class ApexChartElement<ApexType> {
}

@Component({"tag":"apex-options","shadow":true})
class ApexOptions extends ApexChartElement<ApexChartsApexOptions> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<ApexChartsApexOptions> {
        return {
        	series: this.series,
        }
    }

    @Prop()
    series?: ApexNonAxisChartSeries;
}

@Component({"tag":"apex-options-colors-list","shadow":true})
class ApexOptionsColorsList extends ApexChartElement<Exclude<ApexChartsApexOptions['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['colors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-options-colors-item","shadow":true})
class ApexOptionsColorsItem extends ApexChartElement<Exclude<ApexChartsApexOptions['colors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['colors'], undefined>[0]> {
        return this.element.innerText as any
    }
}

@Component({"tag":"apex-options-labels-list","shadow":true})
class ApexOptionsLabelsList extends ApexChartElement<Exclude<ApexChartsApexOptions['labels'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['labels'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-options-labels-item","shadow":true})
class ApexOptionsLabelsItem extends ApexChartElement<Exclude<ApexChartsApexOptions['labels'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['labels'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-options-responsive-list","shadow":true})
class ApexOptionsResponsiveList extends ApexChartElement<Exclude<ApexChartsApexOptions['responsive'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<ApexChartsApexOptions['responsive'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-options-yaxis-list","shadow":true})
class ApexOptionsYaxisList extends ApexChartElement<Extract<Exclude<ApexChartsApexOptions['yaxis'], undefined>, ApexYAxis[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<ApexChartsApexOptions['yaxis'], undefined>, ApexYAxis[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-drop-shadow","shadow":true})
class ApexDropShadow extends ApexChartElement<globalThis.ApexDropShadow> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart","shadow":true})
class ApexChart extends ApexChartElement<globalThis.ApexChart> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-drop-shadow","shadow":true})
class ApexChartDropShadow extends ApexChartElement<Exclude<globalThis.ApexChart['dropShadow'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['dropShadow'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-chart-drop-shadow-enabled-on-series-list","shadow":true})
class ApexChartDropShadowEnabledOnSeriesList extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['enabledOnSeries'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['enabledOnSeries'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-chart-drop-shadow-enabled-on-series-item","shadow":true})
class ApexChartDropShadowEnabledOnSeriesItem extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['enabledOnSeries'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['enabledOnSeries'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-chart-drop-shadow-color-list","shadow":true})
class ApexChartDropShadowColorList extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['color'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['color'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-chart-drop-shadow-color-item","shadow":true})
class ApexChartDropShadowColorItem extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['color'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexChart['dropShadow'], undefined>['color'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-chart-events","shadow":true})
class ApexChartEvents extends ApexChartElement<Exclude<globalThis.ApexChart['events'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['events'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-chart-brush","shadow":true})
class ApexChartBrush extends ApexChartElement<Exclude<globalThis.ApexChart['brush'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-brush-targets-list","shadow":true})
class ApexChartBrushTargetsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['brush'], undefined>['targets'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['brush'], undefined>['targets'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-chart-brush-targets-item","shadow":true})
class ApexChartBrushTargetsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['brush'], undefined>['targets'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['brush'], undefined>['targets'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-chart-locales-list","shadow":true})
class ApexChartLocalesList extends ApexChartElement<Exclude<globalThis.ApexChart['locales'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['locales'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-chart-sparkline","shadow":true})
class ApexChartSparkline extends ApexChartElement<Exclude<globalThis.ApexChart['sparkline'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['sparkline'], undefined>> {
        return {
        	enabled: this.enabled,
        }
    }

    @Prop()
    enabled?: boolean;
}

@Component({"tag":"apex-chart-toolbar","shadow":true})
class ApexChartToolbar extends ApexChartElement<Exclude<globalThis.ApexChart['toolbar'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-toolbar-tools","shadow":true})
class ApexChartToolbarTools extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-toolbar-tools-custom-icons-list","shadow":true})
class ApexChartToolbarToolsCustomIconsList extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>['customIcons'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>['customIcons'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-chart-toolbar-tools-custom-icons-item","shadow":true})
class ApexChartToolbarToolsCustomIconsItem extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>['customIcons'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-toolbar-export","shadow":true})
class ApexChartToolbarExport extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-toolbar-export-csv","shadow":true})
class ApexChartToolbarExportCsv extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>['csv'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-toolbar-export-svg","shadow":true})
class ApexChartToolbarExportSvg extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>['svg'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>['svg'], undefined>> {
        return {
        	filename: this.filename,
        }
    }

    @Prop()
    filename?: string | undefined;
}

@Component({"tag":"apex-chart-toolbar-export-png","shadow":true})
class ApexChartToolbarExportPng extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>['png'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['export'], undefined>['png'], undefined>> {
        return {
        	filename: this.filename,
        }
    }

    @Prop()
    filename?: string | undefined;
}

@Component({"tag":"apex-chart-zoom","shadow":true})
class ApexChartZoom extends ApexChartElement<Exclude<globalThis.ApexChart['zoom'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-zoom-zoomed-area","shadow":true})
class ApexChartZoomZoomedArea extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-chart-zoom-zoomed-area-fill","shadow":true})
class ApexChartZoomZoomedAreaFill extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>['fill'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-zoom-zoomed-area-stroke","shadow":true})
class ApexChartZoomZoomedAreaStroke extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexChart['zoom'], undefined>['zoomedArea'], undefined>['stroke'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-selection","shadow":true})
class ApexChartSelection extends ApexChartElement<Exclude<globalThis.ApexChart['selection'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-selection-fill","shadow":true})
class ApexChartSelectionFill extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['fill'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-selection-stroke","shadow":true})
class ApexChartSelectionStroke extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['stroke'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-selection-xaxis","shadow":true})
class ApexChartSelectionXaxis extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['xaxis'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-selection-yaxis","shadow":true})
class ApexChartSelectionYaxis extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['selection'], undefined>['yaxis'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-animations","shadow":true})
class ApexChartAnimations extends ApexChartElement<Exclude<globalThis.ApexChart['animations'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-animations-animate-gradually","shadow":true})
class ApexChartAnimationsAnimateGradually extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['animations'], undefined>['animateGradually'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-chart-animations-dynamic-animation","shadow":true})
class ApexChartAnimationsDynamicAnimation extends ApexChartElement<Exclude<Exclude<globalThis.ApexChart['animations'], undefined>['dynamicAnimation'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-states","shadow":true})
class ApexStates extends ApexChartElement<globalThis.ApexStates> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<globalThis.ApexStates> {
        return {
        }
    }
}

@Component({"tag":"apex-states-hover","shadow":true})
class ApexStatesHover extends ApexChartElement<Exclude<globalThis.ApexStates['hover'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexStates['hover'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-states-hover-filter","shadow":true})
class ApexStatesHoverFilter extends ApexChartElement<Exclude<Exclude<globalThis.ApexStates['hover'], undefined>['filter'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexStates['hover'], undefined>['filter'], undefined>> {
        return {
        	type: this.type,
        }
    }

    @Prop()
    type?: string;
}

@Component({"tag":"apex-states-active","shadow":true})
class ApexStatesActive extends ApexChartElement<Exclude<globalThis.ApexStates['active'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexStates['active'], undefined>> {
        return {
        	allowMultipleDataPointsSelection: this.allowMultipleDataPointsSelection,
        }
    }

    @Prop()
    allowMultipleDataPointsSelection?: boolean;
}

@Component({"tag":"apex-states-active-filter","shadow":true})
class ApexStatesActiveFilter extends ApexChartElement<Exclude<Exclude<globalThis.ApexStates['active'], undefined>['filter'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexStates['active'], undefined>['filter'], undefined>> {
        return {
        	type: this.type,
        }
    }

    @Prop()
    type?: string;
}

@Component({"tag":"apex-title-subtitle","shadow":true})
class ApexTitleSubtitle extends ApexChartElement<globalThis.ApexTitleSubtitle> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-title-subtitle-style","shadow":true})
class ApexTitleSubtitleStyle extends ApexChartElement<Exclude<globalThis.ApexTitleSubtitle['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-axis-chart-series-list","shadow":true})
class ApexAxisChartSeriesList extends ApexChartElement<globalThis.ApexAxisChartSeries> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<globalThis.ApexAxisChartSeries> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

function QuerySelectorAll<T>() {
    return function<T>(target: ApexChartElement<T>, propertyKey: string) {
        
    }
}

@Component({"tag":"apex-axis-chart-series-item","shadow":true})
class ApexAxisChartSeriesItem extends ApexChartElement<globalThis.ApexAxisChartSeries[0]> {
    @Element()
    element!: HTMLElement;

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

    @QuerySelectorAll()
    get data(): Array<HTMLElement> { return [] }

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
}

@Component({"tag":"apex-axis-chart-series-item-data-1-list","shadow":true})
class ApexAxisChartSeriesItemData1List extends ApexChartElement<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, (number | null)[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, (number | null)[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-2-list","shadow":true})
class ApexAxisChartSeriesItemData2List extends ApexChartElement<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
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
    @Element()
    element!: HTMLElement;

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
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-2-item","shadow":true})
class ApexAxisChartSeriesItemData2Item extends ApexChartElement<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
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
    @Element()
    element!: HTMLElement;

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
    x?: any;
    @Prop()
    y?: any;
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
}

@Component({"tag":"apex-axis-chart-series-item-data-2-item-goals-list","shadow":true})
class ApexAxisChartSeriesItemData2ItemGoalsList extends ApexChartElement<Exclude<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
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
    @Element()
    element!: HTMLElement;

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
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

type A = Exclude<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
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
  }[]>[0]['goals'], undefined>

@Component({"tag":"apex-axis-chart-series-item-data-2-item-goals-item","shadow":true})
class ApexAxisChartSeriesItemData2ItemGoalsItem extends ApexChartElement<Exclude<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, {
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
    @Element()
    element!: HTMLElement;

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
    value?: number;
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
}

@Component({"tag":"apex-axis-chart-series-item-data-3-list","shadow":true})
class ApexAxisChartSeriesItemData3List extends ApexChartElement<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, [number, number | null][]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, [number, number | null][]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-4-list","shadow":true})
class ApexAxisChartSeriesItemData4List extends ApexChartElement<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, [number, (number | null)[]][]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, [number, (number | null)[]][]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-5-list","shadow":true})
class ApexAxisChartSeriesItemData5List extends ApexChartElement<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, number[][]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, number[][]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-5-item-list","shadow":true})
class ApexAxisChartSeriesItemData5ItemList extends ApexChartElement<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, number[][]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, number[][]>[0]> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-5-item-item","shadow":true})
class ApexAxisChartSeriesItemData5ItemItem extends ApexChartElement<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, number[][]>[0][0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, number[][]>[0][0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-axis-chart-series-item-data-6-list","shadow":true})
class ApexAxisChartSeriesItemData6List extends ApexChartElement<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, Record<string, any>[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexAxisChartSeries[0]['data'], undefined>, Record<string, any>[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-non-axis-chart-series-list","shadow":true})
class ApexNonAxisChartSeriesList extends ApexChartElement<Extract<globalThis.ApexNonAxisChartSeries, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<globalThis.ApexNonAxisChartSeries, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-non-axis-chart-series-item","shadow":true})
class ApexNonAxisChartSeriesItem extends ApexChartElement<Extract<globalThis.ApexNonAxisChartSeries, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<globalThis.ApexNonAxisChartSeries, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-stroke","shadow":true})
class ApexStroke extends ApexChartElement<globalThis.ApexStroke> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-stroke-curve-list","shadow":true})
class ApexStrokeCurveList extends ApexChartElement<Extract<Exclude<globalThis.ApexStroke['curve'], undefined>, ('smooth' | 'straight' | 'stepline' | 'linestep' | 'monotoneCubic')[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['curve'], undefined>, ('smooth' | 'straight' | 'stepline' | 'linestep' | 'monotoneCubic')[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-stroke-colors-1-list","shadow":true})
class ApexStrokeColors1List extends ApexChartElement<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, any[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, any[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-stroke-colors-1-item","shadow":true})
class ApexStrokeColors1Item extends ApexChartElement<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, any[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, any[]>[0]> {
        return this.element.innerText as any
    }
}

@Component({"tag":"apex-stroke-colors-2-list","shadow":true})
class ApexStrokeColors2List extends ApexChartElement<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-stroke-colors-2-item","shadow":true})
class ApexStrokeColors2Item extends ApexChartElement<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-stroke-width-list","shadow":true})
class ApexStrokeWidthList extends ApexChartElement<Extract<Exclude<globalThis.ApexStroke['width'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['width'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-stroke-width-item","shadow":true})
class ApexStrokeWidthItem extends ApexChartElement<Extract<Exclude<globalThis.ApexStroke['width'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['width'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-stroke-dash-array-list","shadow":true})
class ApexStrokeDashArrayList extends ApexChartElement<Extract<Exclude<globalThis.ApexStroke['dashArray'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['dashArray'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-stroke-dash-array-item","shadow":true})
class ApexStrokeDashArrayItem extends ApexChartElement<Extract<Exclude<globalThis.ApexStroke['dashArray'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['dashArray'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-annotations","shadow":true})
class ApexAnnotations extends ApexChartElement<globalThis.ApexAnnotations> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<globalThis.ApexAnnotations> {
        return {
        }
    }
}

@Component({"tag":"apex-annotations-yaxis-list","shadow":true})
class ApexAnnotationsYaxisList extends ApexChartElement<Exclude<globalThis.ApexAnnotations['yaxis'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['yaxis'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-annotations-xaxis-list","shadow":true})
class ApexAnnotationsXaxisList extends ApexChartElement<Exclude<globalThis.ApexAnnotations['xaxis'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['xaxis'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-annotations-points-list","shadow":true})
class ApexAnnotationsPointsList extends ApexChartElement<Exclude<globalThis.ApexAnnotations['points'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['points'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-annotations-texts-list","shadow":true})
class ApexAnnotationsTextsList extends ApexChartElement<Exclude<globalThis.ApexAnnotations['texts'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['texts'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-annotations-images-list","shadow":true})
class ApexAnnotationsImagesList extends ApexChartElement<Exclude<globalThis.ApexAnnotations['images'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexAnnotations['images'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"annotation-label","shadow":true})
class AnnotationLabel extends ApexChartElement<globalThis.AnnotationLabel> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"annotation-label-text-list","shadow":true})
class AnnotationLabelTextList extends ApexChartElement<Extract<Exclude<globalThis.AnnotationLabel['text'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.AnnotationLabel['text'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"annotation-label-text-item","shadow":true})
class AnnotationLabelTextItem extends ApexChartElement<Extract<Exclude<globalThis.AnnotationLabel['text'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.AnnotationLabel['text'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"annotation-style","shadow":true})
class AnnotationStyle extends ApexChartElement<globalThis.AnnotationStyle> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"annotation-style-padding","shadow":true})
class AnnotationStylePadding extends ApexChartElement<Exclude<globalThis.AnnotationStyle['padding'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"x-axis-annotations","shadow":true})
class XAxisAnnotations extends ApexChartElement<globalThis.XAxisAnnotations> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"y-axis-annotations","shadow":true})
class YAxisAnnotations extends ApexChartElement<globalThis.YAxisAnnotations> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"point-annotations","shadow":true})
class PointAnnotations extends ApexChartElement<globalThis.PointAnnotations> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"point-annotations-marker","shadow":true})
class PointAnnotationsMarker extends ApexChartElement<Exclude<globalThis.PointAnnotations['marker'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"point-annotations-image","shadow":true})
class PointAnnotationsImage extends ApexChartElement<Exclude<globalThis.PointAnnotations['image'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"text-annotations","shadow":true})
class TextAnnotations extends ApexChartElement<globalThis.TextAnnotations> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"image-annotations","shadow":true})
class ImageAnnotations extends ApexChartElement<globalThis.ImageAnnotations> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-locale","shadow":true})
class ApexLocale extends ApexChartElement<globalThis.ApexLocale> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<globalThis.ApexLocale> {
        return {
        	name: this.name,
        }
    }

    @Prop()
    name?: string;
}

@Component({"tag":"apex-locale-options","shadow":true})
class ApexLocaleOptions extends ApexChartElement<Exclude<globalThis.ApexLocale['options'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLocale['options'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-locale-options-months-list","shadow":true})
class ApexLocaleOptionsMonthsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['months'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['months'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-locale-options-months-item","shadow":true})
class ApexLocaleOptionsMonthsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['months'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['months'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-locale-options-short-months-list","shadow":true})
class ApexLocaleOptionsShortMonthsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortMonths'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortMonths'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-locale-options-short-months-item","shadow":true})
class ApexLocaleOptionsShortMonthsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortMonths'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortMonths'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-locale-options-days-list","shadow":true})
class ApexLocaleOptionsDaysList extends ApexChartElement<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['days'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['days'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-locale-options-days-item","shadow":true})
class ApexLocaleOptionsDaysItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['days'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['days'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-locale-options-short-days-list","shadow":true})
class ApexLocaleOptionsShortDaysList extends ApexChartElement<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortDays'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortDays'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-locale-options-short-days-item","shadow":true})
class ApexLocaleOptionsShortDaysItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortDays'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['shortDays'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-locale-options-toolbar","shadow":true})
class ApexLocaleOptionsToolbar extends ApexChartElement<Exclude<Exclude<globalThis.ApexLocale['options'], undefined>['toolbar'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options","shadow":true})
class ApexPlotOptions extends ApexChartElement<globalThis.ApexPlotOptions> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<globalThis.ApexPlotOptions> {
        return {
        }
    }
}

@Component({"tag":"apex-plot-options-line","shadow":true})
class ApexPlotOptionsLine extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['line'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['line'], undefined>> {
        return {
        	isSlopeChart: this.isSlopeChart,
        }
    }

    @Prop()
    isSlopeChart?: boolean;
}

@Component({"tag":"apex-plot-options-line-colors","shadow":true})
class ApexPlotOptionsLineColors extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['line'], undefined>['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-area","shadow":true})
class ApexPlotOptionsArea extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['area'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['area'], undefined>> {
        return {
        	fillTo: this.fillTo,
        }
    }

    @Prop()
    fillTo?: "origin" | "end";
}

@Component({"tag":"apex-plot-options-bar","shadow":true})
class ApexPlotOptionsBar extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['bar'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-bar-dumbbell-colors-list","shadow":true})
class ApexPlotOptionsBarDumbbellColorsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-bar-dumbbell-colors-item-list","shadow":true})
class ApexPlotOptionsBarDumbbellColorsItemList extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>[0]> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-bar-dumbbell-colors-item-item","shadow":true})
class ApexPlotOptionsBarDumbbellColorsItemItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>[0][0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dumbbellColors'], undefined>[0][0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-bar-colors","shadow":true})
class ApexPlotOptionsBarColors extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-bar-colors-ranges-list","shadow":true})
class ApexPlotOptionsBarColorsRangesList extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['ranges'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['ranges'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-bar-colors-ranges-item","shadow":true})
class ApexPlotOptionsBarColorsRangesItem extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['ranges'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-bar-colors-background-bar-colors-list","shadow":true})
class ApexPlotOptionsBarColorsBackgroundBarColorsList extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['backgroundBarColors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['backgroundBarColors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-bar-colors-background-bar-colors-item","shadow":true})
class ApexPlotOptionsBarColorsBackgroundBarColorsItem extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['backgroundBarColors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['colors'], undefined>['backgroundBarColors'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-bar-data-labels","shadow":true})
class ApexPlotOptionsBarDataLabels extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dataLabels'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-bar-data-labels-total","shadow":true})
class ApexPlotOptionsBarDataLabelsTotal extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dataLabels'], undefined>['total'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-bar-data-labels-total-style","shadow":true})
class ApexPlotOptionsBarDataLabelsTotalStyle extends ApexChartElement<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dataLabels'], undefined>['total'], undefined>['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-bubble","shadow":true})
class ApexPlotOptionsBubble extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['bubble'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-candlestick","shadow":true})
class ApexPlotOptionsCandlestick extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>> {
        return {
        	type: this.type,
        }
    }

    @Prop()
    type?: string;
}

@Component({"tag":"apex-plot-options-candlestick-colors","shadow":true})
class ApexPlotOptionsCandlestickColors extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-plot-options-candlestick-colors-upward-list","shadow":true})
class ApexPlotOptionsCandlestickColorsUpwardList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['upward'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['upward'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-candlestick-colors-upward-item","shadow":true})
class ApexPlotOptionsCandlestickColorsUpwardItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['upward'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['upward'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-candlestick-colors-downward-list","shadow":true})
class ApexPlotOptionsCandlestickColorsDownwardList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['downward'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['downward'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-candlestick-colors-downward-item","shadow":true})
class ApexPlotOptionsCandlestickColorsDownwardItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['downward'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['colors'], undefined>['downward'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-candlestick-wick","shadow":true})
class ApexPlotOptionsCandlestickWick extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['wick'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['candlestick'], undefined>['wick'], undefined>> {
        return {
        	useFillColor: this.useFillColor,
        }
    }

    @Prop()
    useFillColor?: boolean;
}

@Component({"tag":"apex-plot-options-box-plot","shadow":true})
class ApexPlotOptionsBoxPlot extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors","shadow":true})
class ApexPlotOptionsBoxPlotColors extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors-upper-list","shadow":true})
class ApexPlotOptionsBoxPlotColorsUpperList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['upper'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['upper'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors-upper-item","shadow":true})
class ApexPlotOptionsBoxPlotColorsUpperItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['upper'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['upper'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors-lower-list","shadow":true})
class ApexPlotOptionsBoxPlotColorsLowerList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['lower'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['lower'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-box-plot-colors-lower-item","shadow":true})
class ApexPlotOptionsBoxPlotColorsLowerItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['lower'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['boxPlot'], undefined>['colors'], undefined>['lower'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-heatmap","shadow":true})
class ApexPlotOptionsHeatmap extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-heatmap-color-scale","shadow":true})
class ApexPlotOptionsHeatmapColorScale extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-heatmap-color-scale-ranges-list","shadow":true})
class ApexPlotOptionsHeatmapColorScaleRangesList extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>['ranges'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>['ranges'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-heatmap-color-scale-ranges-item","shadow":true})
class ApexPlotOptionsHeatmapColorScaleRangesItem extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['heatmap'], undefined>['colorScale'], undefined>['ranges'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-treemap","shadow":true})
class ApexPlotOptionsTreemap extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-treemap-data-labels","shadow":true})
class ApexPlotOptionsTreemapDataLabels extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['dataLabels'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['dataLabels'], undefined>> {
        return {
        	format: this.format,
        }
    }

    @Prop()
    format?: "scale" | "truncate";
}

@Component({"tag":"apex-plot-options-treemap-color-scale","shadow":true})
class ApexPlotOptionsTreemapColorScale extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['colorScale'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-treemap-color-scale-ranges-list","shadow":true})
class ApexPlotOptionsTreemapColorScaleRangesList extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['colorScale'], undefined>['ranges'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['colorScale'], undefined>['ranges'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-treemap-color-scale-ranges-item","shadow":true})
class ApexPlotOptionsTreemapColorScaleRangesItem extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['colorScale'], undefined>['ranges'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-treemap-series-title","shadow":true})
class ApexPlotOptionsTreemapSeriesTitle extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['seriesTitle'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-treemap-series-title-style","shadow":true})
class ApexPlotOptionsTreemapSeriesTitleStyle extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['seriesTitle'], undefined>['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-treemap-series-title-style-padding","shadow":true})
class ApexPlotOptionsTreemapSeriesTitleStylePadding extends ApexChartElement<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['treemap'], undefined>['seriesTitle'], undefined>['style'], undefined>['padding'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-pie","shadow":true})
class ApexPlotOptionsPie extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['pie'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-pie-data-labels","shadow":true})
class ApexPlotOptionsPieDataLabels extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['dataLabels'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-pie-donut","shadow":true})
class ApexPlotOptionsPieDonut extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-pie-donut-labels","shadow":true})
class ApexPlotOptionsPieDonutLabels extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>> {
        return {
        	show: this.show,
        }
    }

    @Prop()
    show?: boolean;
}

@Component({"tag":"apex-plot-options-pie-donut-labels-name","shadow":true})
class ApexPlotOptionsPieDonutLabelsName extends ApexChartElement<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>['name'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-pie-donut-labels-value","shadow":true})
class ApexPlotOptionsPieDonutLabelsValue extends ApexChartElement<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>['value'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-pie-donut-labels-total","shadow":true})
class ApexPlotOptionsPieDonutLabelsTotal extends ApexChartElement<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>['labels'], undefined>['total'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-polar-area","shadow":true})
class ApexPlotOptionsPolarArea extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-plot-options-polar-area-rings","shadow":true})
class ApexPlotOptionsPolarAreaRings extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['rings'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-polar-area-spokes","shadow":true})
class ApexPlotOptionsPolarAreaSpokes extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>> {
        return {
        	strokeWidth: this.strokeWidth,
        }
    }

    @Prop()
    strokeWidth?: number;
}

@Component({"tag":"apex-plot-options-polar-area-spokes-connector-colors-list","shadow":true})
class ApexPlotOptionsPolarAreaSpokesConnectorColorsList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>['connectorColors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>['connectorColors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-polar-area-spokes-connector-colors-item","shadow":true})
class ApexPlotOptionsPolarAreaSpokesConnectorColorsItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>['connectorColors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>['connectorColors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-radar","shadow":true})
class ApexPlotOptionsRadar extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['radar'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-radar-polygons","shadow":true})
class ApexPlotOptionsRadarPolygons extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-stroke-colors-list","shadow":true})
class ApexPlotOptionsRadarPolygonsStrokeColorsList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeColors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeColors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-stroke-colors-item","shadow":true})
class ApexPlotOptionsRadarPolygonsStrokeColorsItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeColors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeColors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-stroke-width-list","shadow":true})
class ApexPlotOptionsRadarPolygonsStrokeWidthList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeWidth'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeWidth'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-stroke-width-item","shadow":true})
class ApexPlotOptionsRadarPolygonsStrokeWidthItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeWidth'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['strokeWidth'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-connector-colors-list","shadow":true})
class ApexPlotOptionsRadarPolygonsConnectorColorsList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['connectorColors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['connectorColors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-connector-colors-item","shadow":true})
class ApexPlotOptionsRadarPolygonsConnectorColorsItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['connectorColors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['connectorColors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-fill","shadow":true})
class ApexPlotOptionsRadarPolygonsFill extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-fill-colors-list","shadow":true})
class ApexPlotOptionsRadarPolygonsFillColorsList extends ApexChartElement<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>['colors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-radar-polygons-fill-colors-item","shadow":true})
class ApexPlotOptionsRadarPolygonsFillColorsItem extends ApexChartElement<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>['colors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>['fill'], undefined>['colors'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-radial-bar","shadow":true})
class ApexPlotOptionsRadialBar extends ApexChartElement<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-radial-bar-hollow","shadow":true})
class ApexPlotOptionsRadialBarHollow extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['hollow'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-radial-bar-track","shadow":true})
class ApexPlotOptionsRadialBarTrack extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-radial-bar-track-background-list","shadow":true})
class ApexPlotOptionsRadialBarTrackBackgroundList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>['background'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>['background'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-plot-options-radial-bar-track-background-item","shadow":true})
class ApexPlotOptionsRadialBarTrackBackgroundItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>['background'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>['background'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-plot-options-radial-bar-data-labels","shadow":true})
class ApexPlotOptionsRadialBarDataLabels extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>> {
        return {
        	show: this.show,
        }
    }

    @Prop()
    show?: boolean;
}

@Component({"tag":"apex-plot-options-radial-bar-data-labels-name","shadow":true})
class ApexPlotOptionsRadialBarDataLabelsName extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>['name'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-radial-bar-data-labels-value","shadow":true})
class ApexPlotOptionsRadialBarDataLabelsValue extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>['value'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-radial-bar-data-labels-total","shadow":true})
class ApexPlotOptionsRadialBarDataLabelsTotal extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['dataLabels'], undefined>['total'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-plot-options-radial-bar-bar-labels","shadow":true})
class ApexPlotOptionsRadialBarBarLabels extends ApexChartElement<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['barLabels'], undefined>> {
    @Element()
    element!: HTMLElement;

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
    @Prop()
    formatter?: (barName: string, opts?: any) => string;
    @Prop()
    onClick?: (barName: string, opts?: any) => void;
}

@Component({"tag":"apex-color-stop","shadow":true})
class ApexColorStop extends ApexChartElement<globalThis.ApexColorStop> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<globalThis.ApexColorStop> {
        return {
        	offset: this.offset,
        	color: this.color,
        	opacity: this.opacity,
        }
    }

    @Prop()
    offset?: number;
    @Prop()
    color?: string;
    @Prop()
    opacity?: number;
}

@Component({"tag":"apex-fill","shadow":true})
class ApexFill extends ApexChartElement<globalThis.ApexFill> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<globalThis.ApexFill> {
        return {
        }
    }
}

@Component({"tag":"apex-fill-colors-list","shadow":true})
class ApexFillColorsList extends ApexChartElement<Exclude<globalThis.ApexFill['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['colors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-colors-item","shadow":true})
class ApexFillColorsItem extends ApexChartElement<Exclude<globalThis.ApexFill['colors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['colors'], undefined>[0]> {
        return this.element.innerText as any
    }
}

@Component({"tag":"apex-fill-opacity-list","shadow":true})
class ApexFillOpacityList extends ApexChartElement<Extract<Exclude<globalThis.ApexFill['opacity'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexFill['opacity'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-opacity-item","shadow":true})
class ApexFillOpacityItem extends ApexChartElement<Extract<Exclude<globalThis.ApexFill['opacity'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexFill['opacity'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-fill-type-list","shadow":true})
class ApexFillTypeList extends ApexChartElement<Extract<Exclude<globalThis.ApexFill['type'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexFill['type'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-type-item","shadow":true})
class ApexFillTypeItem extends ApexChartElement<Extract<Exclude<globalThis.ApexFill['type'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexFill['type'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-fill-gradient","shadow":true})
class ApexFillGradient extends ApexChartElement<Exclude<globalThis.ApexFill['gradient'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-fill-gradient-gradient-to-colors-list","shadow":true})
class ApexFillGradientGradientToColorsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['gradientToColors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['gradientToColors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-gradient-gradient-to-colors-item","shadow":true})
class ApexFillGradientGradientToColorsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['gradientToColors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['gradientToColors'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-fill-gradient-opacity-from-list","shadow":true})
class ApexFillGradientOpacityFromList extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityFrom'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityFrom'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-gradient-opacity-from-item","shadow":true})
class ApexFillGradientOpacityFromItem extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityFrom'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityFrom'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-fill-gradient-opacity-to-list","shadow":true})
class ApexFillGradientOpacityToList extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityTo'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityTo'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-gradient-opacity-to-item","shadow":true})
class ApexFillGradientOpacityToItem extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityTo'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['opacityTo'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-fill-gradient-stops-list","shadow":true})
class ApexFillGradientStopsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['stops'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['stops'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-gradient-stops-item","shadow":true})
class ApexFillGradientStopsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['stops'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['stops'], undefined>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-fill-gradient-color-stops-1-list","shadow":true})
class ApexFillGradientColorStops1List extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, ApexColorStop[][]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, ApexColorStop[][]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-gradient-color-stops-1-item-list","shadow":true})
class ApexFillGradientColorStops1ItemList extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, ApexColorStop[][]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, ApexColorStop[][]>[0]> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-gradient-color-stops-2-list","shadow":true})
class ApexFillGradientColorStops2List extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, ApexColorStop[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['gradient'], undefined>['colorStops'], undefined>, ApexColorStop[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-image","shadow":true})
class ApexFillImage extends ApexChartElement<Exclude<globalThis.ApexFill['image'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-fill-image-src-list","shadow":true})
class ApexFillImageSrcList extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['image'], undefined>['src'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['image'], undefined>['src'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-image-src-item","shadow":true})
class ApexFillImageSrcItem extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['image'], undefined>['src'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['image'], undefined>['src'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-fill-pattern","shadow":true})
class ApexFillPattern extends ApexChartElement<Exclude<globalThis.ApexFill['pattern'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-fill-pattern-style-list","shadow":true})
class ApexFillPatternStyleList extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['pattern'], undefined>['style'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['pattern'], undefined>['style'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-fill-pattern-style-item","shadow":true})
class ApexFillPatternStyleItem extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexFill['pattern'], undefined>['style'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexFill['pattern'], undefined>['style'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-legend","shadow":true})
class ApexLegend extends ApexChartElement<globalThis.ApexLegend> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-legend-custom-legend-items-list","shadow":true})
class ApexLegendCustomLegendItemsList extends ApexChartElement<Exclude<globalThis.ApexLegend['customLegendItems'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['customLegendItems'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-legend-custom-legend-items-item","shadow":true})
class ApexLegendCustomLegendItemsItem extends ApexChartElement<Exclude<globalThis.ApexLegend['customLegendItems'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['customLegendItems'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-legend-labels","shadow":true})
class ApexLegendLabels extends ApexChartElement<Exclude<globalThis.ApexLegend['labels'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['labels'], undefined>> {
        return {
        	useSeriesColors: this.useSeriesColors,
        }
    }

    @Prop()
    useSeriesColors?: boolean;
}

@Component({"tag":"apex-legend-labels-colors-list","shadow":true})
class ApexLegendLabelsColorsList extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexLegend['labels'], undefined>['colors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexLegend['labels'], undefined>['colors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-legend-labels-colors-item","shadow":true})
class ApexLegendLabelsColorsItem extends ApexChartElement<Extract<Exclude<Exclude<globalThis.ApexLegend['labels'], undefined>['colors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<globalThis.ApexLegend['labels'], undefined>['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-legend-markers","shadow":true})
class ApexLegendMarkers extends ApexChartElement<Exclude<globalThis.ApexLegend['markers'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-legend-markers-fill-colors-list","shadow":true})
class ApexLegendMarkersFillColorsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexLegend['markers'], undefined>['fillColors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLegend['markers'], undefined>['fillColors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-legend-markers-fill-colors-item","shadow":true})
class ApexLegendMarkersFillColorsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexLegend['markers'], undefined>['fillColors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexLegend['markers'], undefined>['fillColors'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-legend-item-margin","shadow":true})
class ApexLegendItemMargin extends ApexChartElement<Exclude<globalThis.ApexLegend['itemMargin'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-legend-on-item-click","shadow":true})
class ApexLegendOnItemClick extends ApexChartElement<Exclude<globalThis.ApexLegend['onItemClick'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['onItemClick'], undefined>> {
        return {
        	toggleDataSeries: this.toggleDataSeries,
        }
    }

    @Prop()
    toggleDataSeries?: boolean;
}

@Component({"tag":"apex-legend-on-item-hover","shadow":true})
class ApexLegendOnItemHover extends ApexChartElement<Exclude<globalThis.ApexLegend['onItemHover'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLegend['onItemHover'], undefined>> {
        return {
        	highlightDataSeries: this.highlightDataSeries,
        }
    }

    @Prop()
    highlightDataSeries?: boolean;
}

@Component({"tag":"apex-marker-shape-list","shadow":true})
class ApexMarkerShapeList extends ApexChartElement<Extract<globalThis.ApexMarkerShape, MarkerShapeOptions[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<globalThis.ApexMarkerShape, MarkerShapeOptions[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-discrete-point","shadow":true})
class ApexDiscretePoint extends ApexChartElement<globalThis.ApexDiscretePoint> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-markers","shadow":true})
class ApexMarkers extends ApexChartElement<globalThis.ApexMarkers> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-markers-size-list","shadow":true})
class ApexMarkersSizeList extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['size'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['size'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-markers-size-item","shadow":true})
class ApexMarkersSizeItem extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['size'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['size'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-markers-colors-list","shadow":true})
class ApexMarkersColorsList extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['colors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['colors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-markers-colors-item","shadow":true})
class ApexMarkersColorsItem extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['colors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-markers-stroke-colors-list","shadow":true})
class ApexMarkersStrokeColorsList extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['strokeColors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeColors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-markers-stroke-colors-item","shadow":true})
class ApexMarkersStrokeColorsItem extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['strokeColors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeColors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-markers-stroke-width-list","shadow":true})
class ApexMarkersStrokeWidthList extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['strokeWidth'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeWidth'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-markers-stroke-width-item","shadow":true})
class ApexMarkersStrokeWidthItem extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['strokeWidth'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeWidth'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-markers-stroke-opacity-list","shadow":true})
class ApexMarkersStrokeOpacityList extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['strokeOpacity'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeOpacity'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-markers-stroke-opacity-item","shadow":true})
class ApexMarkersStrokeOpacityItem extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['strokeOpacity'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeOpacity'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-markers-stroke-dash-array-list","shadow":true})
class ApexMarkersStrokeDashArrayList extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['strokeDashArray'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeDashArray'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-markers-stroke-dash-array-item","shadow":true})
class ApexMarkersStrokeDashArrayItem extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['strokeDashArray'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['strokeDashArray'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-markers-fill-opacity-list","shadow":true})
class ApexMarkersFillOpacityList extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['fillOpacity'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['fillOpacity'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-markers-fill-opacity-item","shadow":true})
class ApexMarkersFillOpacityItem extends ApexChartElement<Extract<Exclude<globalThis.ApexMarkers['fillOpacity'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexMarkers['fillOpacity'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-markers-discrete-list","shadow":true})
class ApexMarkersDiscreteList extends ApexChartElement<Exclude<globalThis.ApexMarkers['discrete'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexMarkers['discrete'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-markers-hover","shadow":true})
class ApexMarkersHover extends ApexChartElement<Exclude<globalThis.ApexMarkers['hover'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-no-data","shadow":true})
class ApexNoData extends ApexChartElement<globalThis.ApexNoData> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-no-data-style","shadow":true})
class ApexNoDataStyle extends ApexChartElement<Exclude<globalThis.ApexNoData['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-parsing","shadow":true})
class ApexParsing extends ApexChartElement<globalThis.ApexParsing> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-parsing-y-list","shadow":true})
class ApexParsingYList extends ApexChartElement<Extract<Exclude<globalThis.ApexParsing['y'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexParsing['y'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-parsing-y-item","shadow":true})
class ApexParsingYItem extends ApexChartElement<Extract<Exclude<globalThis.ApexParsing['y'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexParsing['y'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-data-labels","shadow":true})
class ApexDataLabels extends ApexChartElement<globalThis.ApexDataLabels> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-data-labels-enabled-on-series-list","shadow":true})
class ApexDataLabelsEnabledOnSeriesList extends ApexChartElement<Extract<Exclude<globalThis.ApexDataLabels['enabledOnSeries'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexDataLabels['enabledOnSeries'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-data-labels-enabled-on-series-item","shadow":true})
class ApexDataLabelsEnabledOnSeriesItem extends ApexChartElement<Extract<Exclude<globalThis.ApexDataLabels['enabledOnSeries'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexDataLabels['enabledOnSeries'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-data-labels-style","shadow":true})
class ApexDataLabelsStyle extends ApexChartElement<Exclude<globalThis.ApexDataLabels['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-data-labels-style-colors-list","shadow":true})
class ApexDataLabelsStyleColorsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexDataLabels['style'], undefined>['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexDataLabels['style'], undefined>['colors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-data-labels-style-colors-item","shadow":true})
class ApexDataLabelsStyleColorsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexDataLabels['style'], undefined>['colors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexDataLabels['style'], undefined>['colors'], undefined>[0]> {
        return this.element.innerText as any
    }
}

@Component({"tag":"apex-data-labels-background","shadow":true})
class ApexDataLabelsBackground extends ApexChartElement<Exclude<globalThis.ApexDataLabels['background'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-responsive","shadow":true})
class ApexResponsive extends ApexChartElement<globalThis.ApexResponsive> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-tooltip-y","shadow":true})
class ApexTooltipY extends ApexChartElement<globalThis.ApexTooltipY> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<globalThis.ApexTooltipY> {
        return {
        }
    }
}

@Component({"tag":"apex-tooltip-y-title","shadow":true})
class ApexTooltipYTitle extends ApexChartElement<Exclude<globalThis.ApexTooltipY['title'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltipY['title'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-tooltip","shadow":true})
class ApexTooltip extends ApexChartElement<globalThis.ApexTooltip> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-tooltip-enabled-on-series-list","shadow":true})
class ApexTooltipEnabledOnSeriesList extends ApexChartElement<Extract<Exclude<globalThis.ApexTooltip['enabledOnSeries'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexTooltip['enabledOnSeries'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-tooltip-enabled-on-series-item","shadow":true})
class ApexTooltipEnabledOnSeriesItem extends ApexChartElement<Extract<Exclude<globalThis.ApexTooltip['enabledOnSeries'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexTooltip['enabledOnSeries'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-tooltip-custom-list","shadow":true})
class ApexTooltipCustomList extends ApexChartElement<Extract<Exclude<globalThis.ApexTooltip['custom'], undefined>, ((options: any) => any)[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexTooltip['custom'], undefined>, ((options: any) => any)[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-tooltip-style","shadow":true})
class ApexTooltipStyle extends ApexChartElement<Exclude<globalThis.ApexTooltip['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-tooltip-on-dataset-hover","shadow":true})
class ApexTooltipOnDatasetHover extends ApexChartElement<Exclude<globalThis.ApexTooltip['onDatasetHover'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['onDatasetHover'], undefined>> {
        return {
        	highlightDataSeries: this.highlightDataSeries,
        }
    }

    @Prop()
    highlightDataSeries?: boolean;
}

@Component({"tag":"apex-tooltip-x","shadow":true})
class ApexTooltipX extends ApexChartElement<Exclude<globalThis.ApexTooltip['x'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-tooltip-y-list","shadow":true})
class ApexTooltipYList extends ApexChartElement<Extract<Exclude<globalThis.ApexTooltip['y'], undefined>, ApexTooltipY[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexTooltip['y'], undefined>, ApexTooltipY[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-tooltip-z","shadow":true})
class ApexTooltipZ extends ApexChartElement<Exclude<globalThis.ApexTooltip['z'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['z'], undefined>> {
        return {
        	title: this.title,
        }
    }

    @Prop()
    title?: string;
}

@Component({"tag":"apex-tooltip-marker","shadow":true})
class ApexTooltipMarker extends ApexChartElement<Exclude<globalThis.ApexTooltip['marker'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['marker'], undefined>> {
        return {
        	show: this.show,
        }
    }

    @Prop()
    show?: boolean;
}

@Component({"tag":"apex-tooltip-marker-fill-colors-list","shadow":true})
class ApexTooltipMarkerFillColorsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexTooltip['marker'], undefined>['fillColors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexTooltip['marker'], undefined>['fillColors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-tooltip-marker-fill-colors-item","shadow":true})
class ApexTooltipMarkerFillColorsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexTooltip['marker'], undefined>['fillColors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexTooltip['marker'], undefined>['fillColors'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-tooltip-items","shadow":true})
class ApexTooltipItems extends ApexChartElement<Exclude<globalThis.ApexTooltip['items'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexTooltip['items'], undefined>> {
        return {
        	display: this.display,
        }
    }

    @Prop()
    display?: string;
}

@Component({"tag":"apex-tooltip-fixed","shadow":true})
class ApexTooltipFixed extends ApexChartElement<Exclude<globalThis.ApexTooltip['fixed'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis","shadow":true})
class ApexXAxis extends ApexChartElement<globalThis.ApexXAxis> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-overwrite-categories-1-list","shadow":true})
class ApexXAxisOverwriteCategories1List extends ApexChartElement<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, number[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, number[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-x-axis-overwrite-categories-1-item","shadow":true})
class ApexXAxisOverwriteCategories1Item extends ApexChartElement<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, number[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, number[]>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-x-axis-overwrite-categories-2-list","shadow":true})
class ApexXAxisOverwriteCategories2List extends ApexChartElement<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-x-axis-overwrite-categories-2-item","shadow":true})
class ApexXAxisOverwriteCategories2Item extends ApexChartElement<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexXAxis['overwriteCategories'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-x-axis-labels","shadow":true})
class ApexXAxisLabels extends ApexChartElement<Exclude<globalThis.ApexXAxis['labels'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-labels-style","shadow":true})
class ApexXAxisLabelsStyle extends ApexChartElement<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-labels-style-colors-list","shadow":true})
class ApexXAxisLabelsStyleColorsList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-x-axis-labels-style-colors-item","shadow":true})
class ApexXAxisLabelsStyleColorsItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-x-axis-labels-datetime-formatter","shadow":true})
class ApexXAxisLabelsDatetimeFormatter extends ApexChartElement<Exclude<Exclude<globalThis.ApexXAxis['labels'], undefined>['datetimeFormatter'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-group","shadow":true})
class ApexXAxisGroup extends ApexChartElement<Exclude<globalThis.ApexXAxis['group'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['group'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-x-axis-group-groups-list","shadow":true})
class ApexXAxisGroupGroupsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['groups'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['groups'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-x-axis-group-groups-item","shadow":true})
class ApexXAxisGroupGroupsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['groups'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['groups'], undefined>[0]> {
        return {
        	title: this.title,
        	cols: this.cols,
        }
    }

    @Prop()
    title?: string;
    @Prop()
    cols?: number;
}

@Component({"tag":"apex-x-axis-group-style","shadow":true})
class ApexXAxisGroupStyle extends ApexChartElement<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-group-style-colors-list","shadow":true})
class ApexXAxisGroupStyleColorsList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['style'], undefined>['colors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['style'], undefined>['colors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-x-axis-group-style-colors-item","shadow":true})
class ApexXAxisGroupStyleColorsItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['style'], undefined>['colors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['style'], undefined>['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-x-axis-axis-border","shadow":true})
class ApexXAxisAxisBorder extends ApexChartElement<Exclude<globalThis.ApexXAxis['axisBorder'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-axis-ticks","shadow":true})
class ApexXAxisAxisTicks extends ApexChartElement<Exclude<globalThis.ApexXAxis['axisTicks'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-title","shadow":true})
class ApexXAxisTitle extends ApexChartElement<Exclude<globalThis.ApexXAxis['title'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-title-style","shadow":true})
class ApexXAxisTitleStyle extends ApexChartElement<Exclude<Exclude<globalThis.ApexXAxis['title'], undefined>['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-crosshairs","shadow":true})
class ApexXAxisCrosshairs extends ApexChartElement<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-crosshairs-stroke","shadow":true})
class ApexXAxisCrosshairsStroke extends ApexChartElement<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['stroke'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-crosshairs-fill","shadow":true})
class ApexXAxisCrosshairsFill extends ApexChartElement<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-crosshairs-fill-gradient","shadow":true})
class ApexXAxisCrosshairsFillGradient extends ApexChartElement<Exclude<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>['gradient'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-crosshairs-fill-gradient-stops-list","shadow":true})
class ApexXAxisCrosshairsFillGradientStopsList extends ApexChartElement<Exclude<Exclude<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>['gradient'], undefined>['stops'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>['gradient'], undefined>['stops'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-x-axis-crosshairs-fill-gradient-stops-item","shadow":true})
class ApexXAxisCrosshairsFillGradientStopsItem extends ApexChartElement<Exclude<Exclude<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>['gradient'], undefined>['stops'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>['gradient'], undefined>['stops'], undefined>[0]> {
        return parseFloat(this.element.innerText)
    }
}

@Component({"tag":"apex-x-axis-tooltip","shadow":true})
class ApexXAxisTooltip extends ApexChartElement<Exclude<globalThis.ApexXAxis['tooltip'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-x-axis-tooltip-style","shadow":true})
class ApexXAxisTooltipStyle extends ApexChartElement<Exclude<Exclude<globalThis.ApexXAxis['tooltip'], undefined>['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis","shadow":true})
class ApexYAxis extends ApexChartElement<globalThis.ApexYAxis> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis-series-name-list","shadow":true})
class ApexYAxisSeriesNameList extends ApexChartElement<Extract<Exclude<globalThis.ApexYAxis['seriesName'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexYAxis['seriesName'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-y-axis-series-name-item","shadow":true})
class ApexYAxisSeriesNameItem extends ApexChartElement<Extract<Exclude<globalThis.ApexYAxis['seriesName'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexYAxis['seriesName'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-y-axis-labels","shadow":true})
class ApexYAxisLabels extends ApexChartElement<Exclude<globalThis.ApexYAxis['labels'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis-labels-style","shadow":true})
class ApexYAxisLabelsStyle extends ApexChartElement<Exclude<Exclude<globalThis.ApexYAxis['labels'], undefined>['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis-labels-style-colors-list","shadow":true})
class ApexYAxisLabelsStyleColorsList extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexYAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexYAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-y-axis-labels-style-colors-item","shadow":true})
class ApexYAxisLabelsStyleColorsItem extends ApexChartElement<Extract<Exclude<Exclude<Exclude<globalThis.ApexYAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexYAxis['labels'], undefined>['style'], undefined>['colors'], undefined>, string[]>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-y-axis-axis-border","shadow":true})
class ApexYAxisAxisBorder extends ApexChartElement<Exclude<globalThis.ApexYAxis['axisBorder'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis-axis-ticks","shadow":true})
class ApexYAxisAxisTicks extends ApexChartElement<Exclude<globalThis.ApexYAxis['axisTicks'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis-title","shadow":true})
class ApexYAxisTitle extends ApexChartElement<Exclude<globalThis.ApexYAxis['title'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis-title-style","shadow":true})
class ApexYAxisTitleStyle extends ApexChartElement<Exclude<Exclude<globalThis.ApexYAxis['title'], undefined>['style'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis-crosshairs","shadow":true})
class ApexYAxisCrosshairs extends ApexChartElement<Exclude<globalThis.ApexYAxis['crosshairs'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis-crosshairs-stroke","shadow":true})
class ApexYAxisCrosshairsStroke extends ApexChartElement<Exclude<Exclude<globalThis.ApexYAxis['crosshairs'], undefined>['stroke'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-y-axis-tooltip","shadow":true})
class ApexYAxisTooltip extends ApexChartElement<Exclude<globalThis.ApexYAxis['tooltip'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-forecast-data-points","shadow":true})
class ApexForecastDataPoints extends ApexChartElement<globalThis.ApexForecastDataPoints> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-grid","shadow":true})
class ApexGrid extends ApexChartElement<globalThis.ApexGrid> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-grid-xaxis","shadow":true})
class ApexGridXaxis extends ApexChartElement<Exclude<globalThis.ApexGrid['xaxis'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['xaxis'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-grid-xaxis-lines","shadow":true})
class ApexGridXaxisLines extends ApexChartElement<Exclude<Exclude<globalThis.ApexGrid['xaxis'], undefined>['lines'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-grid-yaxis","shadow":true})
class ApexGridYaxis extends ApexChartElement<Exclude<globalThis.ApexGrid['yaxis'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['yaxis'], undefined>> {
        return {
        }
    }
}

@Component({"tag":"apex-grid-yaxis-lines","shadow":true})
class ApexGridYaxisLines extends ApexChartElement<Exclude<Exclude<globalThis.ApexGrid['yaxis'], undefined>['lines'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-grid-row","shadow":true})
class ApexGridRow extends ApexChartElement<Exclude<globalThis.ApexGrid['row'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['row'], undefined>> {
        return {
        	opacity: this.opacity,
        }
    }

    @Prop()
    opacity?: number;
}

@Component({"tag":"apex-grid-row-colors-list","shadow":true})
class ApexGridRowColorsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexGrid['row'], undefined>['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['row'], undefined>['colors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-grid-row-colors-item","shadow":true})
class ApexGridRowColorsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexGrid['row'], undefined>['colors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['row'], undefined>['colors'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-grid-column","shadow":true})
class ApexGridColumn extends ApexChartElement<Exclude<globalThis.ApexGrid['column'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['column'], undefined>> {
        return {
        	opacity: this.opacity,
        }
    }

    @Prop()
    opacity?: number;
}

@Component({"tag":"apex-grid-column-colors-list","shadow":true})
class ApexGridColumnColorsList extends ApexChartElement<Exclude<Exclude<globalThis.ApexGrid['column'], undefined>['colors'], undefined>> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['column'], undefined>['colors'], undefined>> {
        const children = [...this.element.querySelectorAll('TODO')]
        return []
    }
}

@Component({"tag":"apex-grid-column-colors-item","shadow":true})
class ApexGridColumnColorsItem extends ApexChartElement<Exclude<Exclude<globalThis.ApexGrid['column'], undefined>['colors'], undefined>[0]> {
    @Element()
    element!: HTMLElement;

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexGrid['column'], undefined>['colors'], undefined>[0]> {
        return this.element.innerText
    }
}

@Component({"tag":"apex-grid-padding","shadow":true})
class ApexGridPadding extends ApexChartElement<Exclude<globalThis.ApexGrid['padding'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-theme","shadow":true})
class ApexTheme extends ApexChartElement<globalThis.ApexTheme> {
    @Element()
    element!: HTMLElement;

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
}

@Component({"tag":"apex-theme-monochrome","shadow":true})
class ApexThemeMonochrome extends ApexChartElement<Exclude<globalThis.ApexTheme['monochrome'], undefined>> {
    @Element()
    element!: HTMLElement;

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
}
