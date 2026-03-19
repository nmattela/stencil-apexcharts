import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-parsing","shadow":true})
export class ApexParsing {
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
        const yChildren: Array<HTMLApexParsingYListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-parsing-y-list') ?? []) as Array<HTMLApexParsingYListElement>
        this.y = await yChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexParsing> {
        return {
        	x: this.x,
        	z: this.z,
        	y: this.y,
        }
    }

    @Prop()
    x?: string;
    @Prop()
    z?: string;
    @Prop()
    y?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
