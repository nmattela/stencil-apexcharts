import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-grid-yaxis","shadow":true})
export class ApexGridYaxis {
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
        const linesChildren: Array<HTMLApexGridYaxisLinesElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-yaxis-lines') ?? []) as Array<HTMLApexGridYaxisLinesElement>
        this.lines = await linesChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['yaxis'], undefined>> {
        return {
        	lines: this.lines,
        }
    }

    @Prop()
    lines?: { show?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
