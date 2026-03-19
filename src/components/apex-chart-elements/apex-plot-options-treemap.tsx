import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-treemap","shadow":true})
export class ApexPlotOptionsTreemap {
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
        const dataLabelsChildren: Array<HTMLApexPlotOptionsTreemapDataLabelsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-data-labels') ?? []) as Array<HTMLApexPlotOptionsTreemapDataLabelsElement>
        this.dataLabels = await dataLabelsChildren.at(0)?.getData()
        const colorScaleChildren: Array<HTMLApexPlotOptionsTreemapColorScaleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-color-scale') ?? []) as Array<HTMLApexPlotOptionsTreemapColorScaleElement>
        this.colorScale = await colorScaleChildren.at(0)?.getData()
        const seriesTitleChildren: Array<HTMLApexPlotOptionsTreemapSeriesTitleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-series-title') ?? []) as Array<HTMLApexPlotOptionsTreemapSeriesTitleElement>
        this.seriesTitle = await seriesTitleChildren.at(0)?.getData()
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
        	dataLabels: this.dataLabels,
        	colorScale: this.colorScale,
        	seriesTitle: this.seriesTitle,
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
