import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-grid-xaxis","shadow":true})
export class ApexGridXaxis {
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
        const linesChildren: Array<HTMLApexGridXaxisLinesElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-xaxis-lines') ?? []) as Array<HTMLApexGridXaxisLinesElement>
        this.lines = await linesChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexGrid['xaxis'], undefined>> {
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
