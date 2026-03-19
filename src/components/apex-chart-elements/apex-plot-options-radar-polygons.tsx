import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radar-polygons","shadow":true})
export class ApexPlotOptionsRadarPolygons {
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
        const strokeColorsChildren: Array<HTMLApexPlotOptionsRadarPolygonsStrokeColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-stroke-colors-list') ?? []) as Array<HTMLApexPlotOptionsRadarPolygonsStrokeColorsListElement>
        this.strokeColors = await strokeColorsChildren.at(0)?.getData()
        const strokeWidthChildren: Array<HTMLApexPlotOptionsRadarPolygonsStrokeWidthListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-stroke-width-list') ?? []) as Array<HTMLApexPlotOptionsRadarPolygonsStrokeWidthListElement>
        this.strokeWidth = await strokeWidthChildren.at(0)?.getData()
        const connectorColorsChildren: Array<HTMLApexPlotOptionsRadarPolygonsConnectorColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-connector-colors-list') ?? []) as Array<HTMLApexPlotOptionsRadarPolygonsConnectorColorsListElement>
        this.connectorColors = await connectorColorsChildren.at(0)?.getData()
        const fillChildren: Array<HTMLApexPlotOptionsRadarPolygonsFillElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons-fill') ?? []) as Array<HTMLApexPlotOptionsRadarPolygonsFillElement>
        this.fill = await fillChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radar'], undefined>['polygons'], undefined>> {
        return {
        	strokeColors: this.strokeColors,
        	strokeWidth: this.strokeWidth,
        	connectorColors: this.connectorColors,
        	fill: this.fill,
        }
    }

    @Prop()
    strokeColors?: string | string[];
    @Prop()
    strokeWidth?: string | string[];
    @Prop()
    connectorColors?: string | string[];
    @Prop()
    fill?: { colors?: string[] | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
