import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radar","shadow":true})
export class ApexPlotOptionsRadar {
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
        const polygonsChildren: Array<HTMLApexPlotOptionsRadarPolygonsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radar-polygons') ?? []) as Array<HTMLApexPlotOptionsRadarPolygonsElement>
        this.polygons = await polygonsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['radar'], undefined>> {
        return {
        	size: this.size,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	polygons: this.polygons,
        }
    }

    @Prop()
    size?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    polygons?: { strokeColors?: string | string[] | undefined; strokeWidth?: string | string[] | undefined; connectorColors?: string | string[] | undefined; fill?: { colors?: string[] | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
