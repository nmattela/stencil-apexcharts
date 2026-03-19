import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-heatmap","shadow":true})
export class ApexPlotOptionsHeatmap {
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
        const colorScaleChildren: Array<HTMLApexPlotOptionsHeatmapColorScaleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-heatmap-color-scale') ?? []) as Array<HTMLApexPlotOptionsHeatmapColorScaleElement>
        this.colorScale = await colorScaleChildren.at(0)?.getData()
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
        	colorScale: this.colorScale,
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
