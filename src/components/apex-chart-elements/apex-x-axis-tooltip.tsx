import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-tooltip","shadow":true})
export class ApexXAxisTooltip {
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
        const styleChildren: Array<HTMLApexXAxisTooltipStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-tooltip-style') ?? []) as Array<HTMLApexXAxisTooltipStyleElement>
        this.style = await styleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['tooltip'], undefined>> {
        return {
        	enabled: this.enabled,
        	offsetY: this.offsetY,
        	style: this.style,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { fontSize?: string | undefined; fontFamily?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
