import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-y-axis-labels-style","shadow":true})
export class ApexYAxisLabelsStyle {
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
        const colorsChildren: Array<HTMLApexYAxisLabelsStyleColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-labels-style-colors-list') ?? []) as Array<HTMLApexYAxisLabelsStyleColorsListElement>
        this.colors = await colorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexYAxis['labels'], undefined>['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontWeight: this.fontWeight,
        	fontFamily: this.fontFamily,
        	cssClass: this.cssClass,
        	colors: this.colors,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontWeight?: string | number;
    @Prop()
    fontFamily?: string;
    @Prop()
    cssClass?: string;
    @Prop()
    colors?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
