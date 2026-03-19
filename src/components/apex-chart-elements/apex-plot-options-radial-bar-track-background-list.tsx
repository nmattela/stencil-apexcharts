import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radial-bar-track-background-list","shadow":true})
export class ApexPlotOptionsRadialBarTrackBackgroundList {
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
        const listItems: Array<HTMLApexPlotOptionsRadialBarTrackBackgroundItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-track-background-item') ?? []) as Array<HTMLApexPlotOptionsRadialBarTrackBackgroundItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>['background'], undefined>, string[]>> {
        return this.listItems
    }

    @Prop()
    listItems: Array<string> = [];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
