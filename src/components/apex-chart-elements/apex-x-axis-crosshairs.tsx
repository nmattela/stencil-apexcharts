import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-crosshairs","shadow":true})
export class ApexXAxisCrosshairs {
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
        const strokeChildren: Array<HTMLApexXAxisCrosshairsStrokeElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs-stroke') ?? []) as Array<HTMLApexXAxisCrosshairsStrokeElement>
        this.stroke = await strokeChildren.at(0)?.getData()
        const fillChildren: Array<HTMLApexXAxisCrosshairsFillElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs-fill') ?? []) as Array<HTMLApexXAxisCrosshairsFillElement>
        this.fill = await fillChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['crosshairs'], undefined>> {
        return {
        	show: this.show,
        	width: this.width,
        	position: this.position,
        	opacity: this.opacity,
        	stroke: this.stroke,
        	fill: this.fill,
        	dropShadow: this.dropShadow,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    width?: string | number;
    @Prop()
    position?: string;
    @Prop()
    opacity?: number;
    @Prop()
    stroke?: { color?: string | undefined; width?: number | undefined; dashArray?: number | undefined; };
    @Prop()
    fill?: { type?: string | undefined; color?: string | undefined; gradient?: { colorFrom?: string | undefined; colorTo?: string | undefined; stops?: number[] | undefined; opacityFrom?: number | undefined; opacityTo?: number | undefined; } | undefined; };
    @Prop()
    dropShadow?: ApexDropShadow;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
