import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radial-bar","shadow":true})
export class ApexPlotOptionsRadialBar {
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
        const hollowChildren: Array<HTMLApexPlotOptionsRadialBarHollowElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-hollow') ?? []) as Array<HTMLApexPlotOptionsRadialBarHollowElement>
        this.hollow = await hollowChildren.at(0)?.getData()
        const trackChildren: Array<HTMLApexPlotOptionsRadialBarTrackElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-track') ?? []) as Array<HTMLApexPlotOptionsRadialBarTrackElement>
        this.track = await trackChildren.at(0)?.getData()
        const dataLabelsChildren: Array<HTMLApexPlotOptionsRadialBarDataLabelsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-data-labels') ?? []) as Array<HTMLApexPlotOptionsRadialBarDataLabelsElement>
        this.dataLabels = await dataLabelsChildren.at(0)?.getData()
        const barLabelsChildren: Array<HTMLApexPlotOptionsRadialBarBarLabelsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-bar-labels') ?? []) as Array<HTMLApexPlotOptionsRadialBarBarLabelsElement>
        this.barLabels = await barLabelsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>> {
        return {
        	inverseOrder: this.inverseOrder,
        	startAngle: this.startAngle,
        	endAngle: this.endAngle,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	hollow: this.hollow,
        	track: this.track,
        	dataLabels: this.dataLabels,
        	barLabels: this.barLabels,
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
