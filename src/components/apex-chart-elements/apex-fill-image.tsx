import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-fill-image","shadow":true})
export class ApexFillImage {
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
        const srcChildren: Array<HTMLApexFillImageSrcListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-image-src-list') ?? []) as Array<HTMLApexFillImageSrcListElement>
        this.src = await srcChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['image'], undefined>> {
        return {
        	width: this.width,
        	height: this.height,
        	src: this.src,
        }
    }

    @Prop()
    width?: number;
    @Prop()
    height?: number;
    @Prop()
    src?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
