import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-crosshairs-fill","shadow":true})
export class ApexXAxisCrosshairsFill {
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
        const gradientChildren: Array<HTMLApexXAxisCrosshairsFillGradientElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs-fill-gradient') ?? []) as Array<HTMLApexXAxisCrosshairsFillGradientElement>
        this.gradient = await gradientChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>['fill'], undefined>> {
        return {
        	type: this.type,
        	color: this.color,
        	gradient: this.gradient,
        }
    }

    @Prop()
    type?: string;
    @Prop()
    color?: string;
    @Prop()
    gradient?: { colorFrom?: string | undefined; colorTo?: string | undefined; stops?: number[] | undefined; opacityFrom?: number | undefined; opacityTo?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
