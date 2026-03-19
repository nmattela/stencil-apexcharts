import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-stroke-curve-list","shadow":true})
export class ApexStrokeCurveList {
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
        const listItems: Array<HTML"smooth" | "straight" | "stepline" | "linestep" | "monotoneCubic"Element> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === '"smooth-"- -|- -"straight-"- -|- -"stepline-"- -|- -"linestep-"- -|- -"monotone-cubic-"') ?? []) as Array<HTML"smooth" | "straight" | "stepline" | "linestep" | "monotoneCubic"Element>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<globalThis.ApexStroke['curve'], undefined>, ('smooth' | 'straight' | 'stepline' | 'linestep' | 'monotoneCubic')[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<('smooth' | 'straight' | 'stepline' | 'linestep' | 'monotoneCubic')> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
