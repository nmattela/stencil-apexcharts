import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radial-bar-bar-labels","shadow":true})
export class ApexPlotOptionsRadialBarBarLabels {
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
        const formatterChildren: Array<HTMLApexPlotOptionsRadialBarBarLabelsFormatterElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-bar-labels-formatter') ?? []) as Array<HTMLApexPlotOptionsRadialBarBarLabelsFormatterElement>
        this.formatter = await formatterChildren.at(0)?.getData()
        const onClickChildren: Array<HTMLApexPlotOptionsRadialBarBarLabelsOnClickElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-bar-labels-on-click') ?? []) as Array<HTMLApexPlotOptionsRadialBarBarLabelsOnClickElement>
        this.onClick = await onClickChildren.at(0)?.getData()
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
    @Prop()
    formatter?: (barName: string, opts?: any) => string;
    @Prop()
    onClick?: (barName: string, opts?: any) => void;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
