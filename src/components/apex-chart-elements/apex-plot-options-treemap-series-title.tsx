import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-treemap-series-title","shadow":true})
export class ApexPlotOptionsTreemapSeriesTitle {
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
        const styleChildren: Array<HTMLApexPlotOptionsTreemapSeriesTitleStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-series-title-style') ?? []) as Array<HTMLApexPlotOptionsTreemapSeriesTitleStyleElement>
        this.style = await styleChildren.at(0)?.getData()
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
        	style: this.style,
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
