import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-fill-pattern","shadow":true})
export class ApexFillPattern {
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
        const styleChildren: Array<HTMLApexFillPatternStyleListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-fill-pattern-style-list') ?? []) as Array<HTMLApexFillPatternStyleListElement>
        this.style = await styleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexFill['pattern'], undefined>> {
        return {
        	width: this.width,
        	height: this.height,
        	strokeWidth: this.strokeWidth,
        	style: this.style,
        }
    }

    @Prop()
    width?: number;
    @Prop()
    height?: number;
    @Prop()
    strokeWidth?: number;
    @Prop()
    style?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
