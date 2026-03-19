import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-y-axis-labels","shadow":true})
export class ApexYAxisLabels {
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
        const styleChildren: Array<HTMLApexYAxisLabelsStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-y-axis-labels-style') ?? []) as Array<HTMLApexYAxisLabelsStyleElement>
        this.style = await styleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexYAxis['labels'], undefined>> {
        return {
        	show: this.show,
        	showDuplicates: this.showDuplicates,
        	minWidth: this.minWidth,
        	maxWidth: this.maxWidth,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	rotate: this.rotate,
        	align: this.align,
        	padding: this.padding,
        	style: this.style,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    showDuplicates?: boolean;
    @Prop()
    minWidth?: number;
    @Prop()
    maxWidth?: number;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    rotate?: number;
    @Prop()
    align?: "left" | "center" | "right";
    @Prop()
    padding?: number;
    @Prop()
    style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontWeight?: string | number | undefined; fontFamily?: string | undefined; cssClass?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
