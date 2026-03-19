import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-polar-area-spokes","shadow":true})
export class ApexPlotOptionsPolarAreaSpokes {
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
        const connectorColorsChildren: Array<HTMLApexPlotOptionsPolarAreaSpokesConnectorColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-polar-area-spokes-connector-colors-list') ?? []) as Array<HTMLApexPlotOptionsPolarAreaSpokesConnectorColorsListElement>
        this.connectorColors = await connectorColorsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>['spokes'], undefined>> {
        return {
        	strokeWidth: this.strokeWidth,
        	connectorColors: this.connectorColors,
        }
    }

    @Prop()
    strokeWidth?: number;
    @Prop()
    connectorColors?: string | string[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
