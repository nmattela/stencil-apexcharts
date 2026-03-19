import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options","shadow":true})
export class ApexPlotOptions {
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
        const lineChildren: Array<HTMLApexPlotOptionsLineElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-line') ?? []) as Array<HTMLApexPlotOptionsLineElement>
        this.line = await lineChildren.at(0)?.getData()
        const areaChildren: Array<HTMLApexPlotOptionsAreaElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-area') ?? []) as Array<HTMLApexPlotOptionsAreaElement>
        this.area = await areaChildren.at(0)?.getData()
        const barChildren: Array<HTMLApexPlotOptionsBarElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar') ?? []) as Array<HTMLApexPlotOptionsBarElement>
        this.bar = await barChildren.at(0)?.getData()
        const bubbleChildren: Array<HTMLApexPlotOptionsBubbleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bubble') ?? []) as Array<HTMLApexPlotOptionsBubbleElement>
        this.bubble = await bubbleChildren.at(0)?.getData()
        const candlestickChildren: Array<HTMLApexPlotOptionsCandlestickElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-candlestick') ?? []) as Array<HTMLApexPlotOptionsCandlestickElement>
        this.candlestick = await candlestickChildren.at(0)?.getData()
        const boxPlotChildren: Array<HTMLApexPlotOptionsBoxPlotElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-box-plot') ?? []) as Array<HTMLApexPlotOptionsBoxPlotElement>
        this.boxPlot = await boxPlotChildren.at(0)?.getData()
        const heatmapChildren: Array<HTMLApexPlotOptionsHeatmapElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-heatmap') ?? []) as Array<HTMLApexPlotOptionsHeatmapElement>
        this.heatmap = await heatmapChildren.at(0)?.getData()
        const treemapChildren: Array<HTMLApexPlotOptionsTreemapElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap') ?? []) as Array<HTMLApexPlotOptionsTreemapElement>
        this.treemap = await treemapChildren.at(0)?.getData()
        const pieChildren: Array<HTMLApexPlotOptionsPieElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie') ?? []) as Array<HTMLApexPlotOptionsPieElement>
        this.pie = await pieChildren.at(0)?.getData()
        const polarAreaChildren: Array<HTMLApexPlotOptionsPolarAreaElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-polar-area') ?? []) as Array<HTMLApexPlotOptionsPolarAreaElement>
        this.polarArea = await polarAreaChildren.at(0)?.getData()
        const radarChildren: Array<HTMLApexPlotOptionsRadarElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar') ?? []) as Array<HTMLApexPlotOptionsRadarElement>
        this.radar = await radarChildren.at(0)?.getData()
        const radialBarChildren: Array<HTMLApexPlotOptionsRadialBarElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar') ?? []) as Array<HTMLApexPlotOptionsRadialBarElement>
        this.radialBar = await radialBarChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexPlotOptions> {
        return {
        	line: this.line,
        	area: this.area,
        	bar: this.bar,
        	bubble: this.bubble,
        	candlestick: this.candlestick,
        	boxPlot: this.boxPlot,
        	heatmap: this.heatmap,
        	treemap: this.treemap,
        	pie: this.pie,
        	polarArea: this.polarArea,
        	radar: this.radar,
        	radialBar: this.radialBar,
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
