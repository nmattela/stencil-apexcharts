import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-y-axis-title","shadow":true})
export class ApexYAxisTitle {
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
        const styleChildren: Array<HTMLApexYAxisTitleStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-title-style') ?? []) as Array<HTMLApexYAxisTitleStyleElement>
        this.style = await styleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexYAxis['title'], undefined>> {
        return {
        	text: this.text,
        	rotate: this.rotate,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	style: this.style,
        }
    }

    @Prop()
    text?: string;
    @Prop()
    rotate?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { color?: string | undefined; fontSize?: string | undefined; fontWeight?: string | number | undefined; fontFamily?: string | undefined; cssClass?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
