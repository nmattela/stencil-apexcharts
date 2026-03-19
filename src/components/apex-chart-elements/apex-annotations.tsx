import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-annotations","shadow":true})
export class ApexAnnotations {
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
        const yaxisChildren: Array<HTMLApexAnnotationsYaxisListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-yaxis-list') ?? []) as Array<HTMLApexAnnotationsYaxisListElement>
        this.yaxis = await yaxisChildren.at(0)?.getData()
        const xaxisChildren: Array<HTMLApexAnnotationsXaxisListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-xaxis-list') ?? []) as Array<HTMLApexAnnotationsXaxisListElement>
        this.xaxis = await xaxisChildren.at(0)?.getData()
        const pointsChildren: Array<HTMLApexAnnotationsPointsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-points-list') ?? []) as Array<HTMLApexAnnotationsPointsListElement>
        this.points = await pointsChildren.at(0)?.getData()
        const textsChildren: Array<HTMLApexAnnotationsTextsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-texts-list') ?? []) as Array<HTMLApexAnnotationsTextsListElement>
        this.texts = await textsChildren.at(0)?.getData()
        const imagesChildren: Array<HTMLApexAnnotationsImagesListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-annotations-images-list') ?? []) as Array<HTMLApexAnnotationsImagesListElement>
        this.images = await imagesChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexAnnotations> {
        return {
        	yaxis: this.yaxis,
        	xaxis: this.xaxis,
        	points: this.points,
        	texts: this.texts,
        	images: this.images,
        }
    }

    @Prop()
    yaxis?: YAxisAnnotations[];
    @Prop()
    xaxis?: XAxisAnnotations[];
    @Prop()
    points?: PointAnnotations[];
    @Prop()
    texts?: TextAnnotations[];
    @Prop()
    images?: ImageAnnotations[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
