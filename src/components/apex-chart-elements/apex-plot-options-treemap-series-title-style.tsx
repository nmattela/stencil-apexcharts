import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-treemap-series-title-style","shadow":true})
export class ApexPlotOptionsTreemapSeriesTitleStyle {
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
        const paddingChildren: Array<HTMLApexPlotOptionsTreemapSeriesTitleStylePaddingElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-treemap-series-title-style-padding') ?? []) as Array<HTMLApexPlotOptionsTreemapSeriesTitleStylePaddingElement>
        this.padding = await paddingChildren.at(0)?.getData()
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
        	padding: this.padding,
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
