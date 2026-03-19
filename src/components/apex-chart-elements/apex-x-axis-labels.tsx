import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-labels","shadow":true})
export class ApexXAxisLabels {
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
        const styleChildren: Array<HTMLApexXAxisLabelsStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-labels-style') ?? []) as Array<HTMLApexXAxisLabelsStyleElement>
        this.style = await styleChildren.at(0)?.getData()
        const datetimeFormatterChildren: Array<HTMLApexXAxisLabelsDatetimeFormatterElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-labels-datetime-formatter') ?? []) as Array<HTMLApexXAxisLabelsDatetimeFormatterElement>
        this.datetimeFormatter = await datetimeFormatterChildren.at(0)?.getData()
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
        	style: this.style,
        	datetimeFormatter: this.datetimeFormatter,
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
