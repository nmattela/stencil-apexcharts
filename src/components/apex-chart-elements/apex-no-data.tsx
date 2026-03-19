import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-no-data","shadow":true})
export class ApexNoData {
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
        const styleChildren: Array<HTMLApexNoDataStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-no-data-style') ?? []) as Array<HTMLApexNoDataStyleElement>
        this.style = await styleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexNoData> {
        return {
        	text: this.text,
        	align: this.align,
        	verticalAlign: this.verticalAlign,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	style: this.style,
        }
    }

    @Prop()
    text?: string;
    @Prop()
    align?: "left" | "right" | "center";
    @Prop()
    verticalAlign?: "top" | "middle" | "bottom";
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
