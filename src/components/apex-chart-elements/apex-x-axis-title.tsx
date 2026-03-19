import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-title","shadow":true})
export class ApexXAxisTitle {
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
        const styleChildren: Array<HTMLApexXAxisTitleStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-title-style') ?? []) as Array<HTMLApexXAxisTitleStyleElement>
        this.style = await styleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['title'], undefined>> {
        return {
        	text: this.text,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	style: this.style,
        }
    }

    @Prop()
    text?: string;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { color?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; cssClass?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
