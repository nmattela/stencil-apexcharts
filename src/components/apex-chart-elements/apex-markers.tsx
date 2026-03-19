import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-markers","shadow":true})
export class ApexMarkers {
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
        const sizeChildren: Array<HTMLApexMarkersSizeListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-size-list') ?? []) as Array<HTMLApexMarkersSizeListElement>
        this.size = await sizeChildren.at(0)?.getData()
        const colorsChildren: Array<HTMLApexMarkersColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-colors-list') ?? []) as Array<HTMLApexMarkersColorsListElement>
        this.colors = await colorsChildren.at(0)?.getData()
        const strokeColorsChildren: Array<HTMLApexMarkersStrokeColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-stroke-colors-list') ?? []) as Array<HTMLApexMarkersStrokeColorsListElement>
        this.strokeColors = await strokeColorsChildren.at(0)?.getData()
        const strokeWidthChildren: Array<HTMLApexMarkersStrokeWidthListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-stroke-width-list') ?? []) as Array<HTMLApexMarkersStrokeWidthListElement>
        this.strokeWidth = await strokeWidthChildren.at(0)?.getData()
        const strokeOpacityChildren: Array<HTMLApexMarkersStrokeOpacityListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-stroke-opacity-list') ?? []) as Array<HTMLApexMarkersStrokeOpacityListElement>
        this.strokeOpacity = await strokeOpacityChildren.at(0)?.getData()
        const strokeDashArrayChildren: Array<HTMLApexMarkersStrokeDashArrayListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-stroke-dash-array-list') ?? []) as Array<HTMLApexMarkersStrokeDashArrayListElement>
        this.strokeDashArray = await strokeDashArrayChildren.at(0)?.getData()
        const fillOpacityChildren: Array<HTMLApexMarkersFillOpacityListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-fill-opacity-list') ?? []) as Array<HTMLApexMarkersFillOpacityListElement>
        this.fillOpacity = await fillOpacityChildren.at(0)?.getData()
        const discreteChildren: Array<HTMLApexMarkersDiscreteListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-discrete-list') ?? []) as Array<HTMLApexMarkersDiscreteListElement>
        this.discrete = await discreteChildren.at(0)?.getData()
        const hoverChildren: Array<HTMLApexMarkersHoverElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-markers-hover') ?? []) as Array<HTMLApexMarkersHoverElement>
        this.hover = await hoverChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexMarkers> {
        return {
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	showNullDataPoints: this.showNullDataPoints,
        	size: this.size,
        	colors: this.colors,
        	strokeColors: this.strokeColors,
        	strokeWidth: this.strokeWidth,
        	strokeOpacity: this.strokeOpacity,
        	strokeDashArray: this.strokeDashArray,
        	fillOpacity: this.fillOpacity,
        	discrete: this.discrete,
        	shape: this.shape,
        	hover: this.hover,
        }
    }

    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    showNullDataPoints?: boolean;
    @Prop()
    size?: number | number[];
    @Prop()
    colors?: string | string[];
    @Prop()
    strokeColors?: string | string[];
    @Prop()
    strokeWidth?: number | number[];
    @Prop()
    strokeOpacity?: number | number[];
    @Prop()
    strokeDashArray?: number | number[];
    @Prop()
    fillOpacity?: number | number[];
    @Prop()
    discrete?: ApexDiscretePoint[];
    @Prop()
    shape?: ApexMarkerShape;
    @Prop()
    hover?: { size?: number | undefined; sizeOffset?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
