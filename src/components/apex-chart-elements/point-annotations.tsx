import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"point-annotations","shadow":true})
export class PointAnnotations {
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
        const markerChildren: Array<HTMLPointAnnotationsMarkerElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'point-annotations-marker') ?? []) as Array<HTMLPointAnnotationsMarkerElement>
        this.marker = await markerChildren.at(0)?.getData()
        const imageChildren: Array<HTMLPointAnnotationsImageElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'point-annotations-image') ?? []) as Array<HTMLPointAnnotationsImageElement>
        this.image = await imageChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.PointAnnotations> {
        return {
        	id: this.id,
        	x: this.x,
        	y: this.y,
        	yAxisIndex: this.yAxisIndex,
        	seriesIndex: this.seriesIndex,
        	mouseEnter: this.mouseEnter,
        	mouseLeave: this.mouseLeave,
        	click: this.click,
        	marker: this.marker,
        	label: this.label,
        	image: this.image,
        }
    }

    @Prop()
    id?: string | number;
    @Prop()
    x?: string | number;
    @Prop()
    y?: number | null;
    @Prop()
    yAxisIndex?: number;
    @Prop()
    seriesIndex?: number;
    @Prop()
    mouseEnter?: Function;
    @Prop()
    mouseLeave?: Function;
    @Prop()
    click?: Function;
    @Prop()
    marker?: { size?: number | undefined; fillColor?: string | undefined; strokeColor?: string | undefined; strokeWidth?: number | undefined; shape?: string | undefined; offsetX?: number | undefined; offsetY?: number | undefined; cssClass?: string | undefined; };
    @Prop()
    label?: AnnotationLabel;
    @Prop()
    image?: { path?: string | undefined; width?: number | undefined; height?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
