import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-data-labels","shadow":true})
export class ApexDataLabels {
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
        const enabledOnSeriesChildren: Array<HTMLApexDataLabelsEnabledOnSeriesListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-data-labels-enabled-on-series-list') ?? []) as Array<HTMLApexDataLabelsEnabledOnSeriesListElement>
        this.enabledOnSeries = await enabledOnSeriesChildren.at(0)?.getData()
        const styleChildren: Array<HTMLApexDataLabelsStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-data-labels-style') ?? []) as Array<HTMLApexDataLabelsStyleElement>
        this.style = await styleChildren.at(0)?.getData()
        const backgroundChildren: Array<HTMLApexDataLabelsBackgroundElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-data-labels-background') ?? []) as Array<HTMLApexDataLabelsBackgroundElement>
        this.background = await backgroundChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexDataLabels> {
        return {
        	enabled: this.enabled,
        	textAnchor: this.textAnchor,
        	distributed: this.distributed,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	enabledOnSeries: this.enabledOnSeries,
        	style: this.style,
        	background: this.background,
        	dropShadow: this.dropShadow,
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
