import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-group-style","shadow":true})
export class ApexXAxisGroupStyle {
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
        const colorsChildren: Array<HTMLApexXAxisGroupStyleColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-group-style-colors-list') ?? []) as Array<HTMLApexXAxisGroupStyleColorsListElement>
        this.colors = await colorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexXAxis['group'], undefined>['style'], undefined>> {
        return {
        	fontSize: this.fontSize,
        	fontFamily: this.fontFamily,
        	fontWeight: this.fontWeight,
        	cssClass: this.cssClass,
        	colors: this.colors,
        }
    }

    @Prop()
    fontSize?: string;
    @Prop()
    fontFamily?: string;
    @Prop()
    fontWeight?: string | number;
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
