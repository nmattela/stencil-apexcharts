import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-polar-area-spokes-connector-colors-list","shadow":true})
export class ApexPlotOptionsPolarAreaSpokesConnectorColorsList {
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
        const listItems: Array<HTMLApexPlotOptionsPolarAreaSpokesConnectorColorsItemElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-polar-area-spokes-connector-colors-item') ?? []) as Array<HTMLApexPlotOptionsPolarAreaSpokesConnectorColorsItemElement>
        this.listItems = await Promise.all(listItems.map(async el => await el.getData()))
    }

    @Method()
    async getData(): Promise<Extract<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>['connectorColors'], undefined>, string[]>> {
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
