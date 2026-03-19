import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-y-axis-crosshairs","shadow":true})
export class ApexYAxisCrosshairs {
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
        const strokeChildren: Array<HTMLApexYAxisCrosshairsStrokeElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-crosshairs-stroke') ?? []) as Array<HTMLApexYAxisCrosshairsStrokeElement>
        this.stroke = await strokeChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexYAxis['crosshairs'], undefined>> {
        return {
        	show: this.show,
        	position: this.position,
        	stroke: this.stroke,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    position?: string;
    @Prop()
    stroke?: { color?: string | undefined; width?: number | undefined; dashArray?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
