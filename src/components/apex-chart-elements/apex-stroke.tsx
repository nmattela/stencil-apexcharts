import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-stroke","shadow":true})
export class ApexStroke {
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
        const curveChildren: Array<HTMLApexStrokeCurveListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-curve-list') ?? []) as Array<HTMLApexStrokeCurveListElement>
        this.curve = await curveChildren.at(0)?.getData()
        const colorsChildren: Array<HTMLApexStrokeColors1ListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-colors-1-list') ?? []) as Array<HTMLApexStrokeColors1ListElement>
        this.colors = await colorsChildren.at(0)?.getData()
        const widthChildren: Array<HTMLApexStrokeWidthListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-width-list') ?? []) as Array<HTMLApexStrokeWidthListElement>
        this.width = await widthChildren.at(0)?.getData()
        const dashArrayChildren: Array<HTMLApexStrokeDashArrayListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-stroke-dash-array-list') ?? []) as Array<HTMLApexStrokeDashArrayListElement>
        this.dashArray = await dashArrayChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexStroke> {
        return {
        	show: this.show,
        	lineCap: this.lineCap,
        	curve: this.curve,
        	colors: this.colors,
        	width: this.width,
        	dashArray: this.dashArray,
        	fill: this.fill,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    lineCap?: "butt" | "square" | "round";
    @Prop()
    curve?: "smooth" | "straight" | "stepline" | "linestep" | "monotoneCubic" | ("smooth" | "straight" | "stepline" | "linestep" | "monotoneCubic")[];
    @Prop()
    colors?: any[] | string[];
    @Prop()
    width?: number | number[];
    @Prop()
    dashArray?: number | number[];
    @Prop()
    fill?: ApexFill;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
