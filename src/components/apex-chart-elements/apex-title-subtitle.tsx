import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-title-subtitle","shadow":true})
export class ApexTitleSubtitle {
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
        const styleChildren: Array<HTMLApexTitleSubtitleStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-title-subtitle-style') ?? []) as Array<HTMLApexTitleSubtitleStyleElement>
        this.style = await styleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexTitleSubtitle> {
        return {
        	text: this.text,
        	align: this.align,
        	margin: this.margin,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	floating: this.floating,
        	style: this.style,
        }
    }

    @Prop()
    text?: string;
    @Prop()
    align?: "left" | "center" | "right";
    @Prop()
    margin?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    floating?: boolean;
    @Prop()
    style?: { fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
