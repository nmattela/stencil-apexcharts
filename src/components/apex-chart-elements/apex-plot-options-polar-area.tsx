import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-polar-area","shadow":true})
export class ApexPlotOptionsPolarArea {
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
        const ringsChildren: Array<HTMLApexPlotOptionsPolarAreaRingsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-polar-area-rings') ?? []) as Array<HTMLApexPlotOptionsPolarAreaRingsElement>
        this.rings = await ringsChildren.at(0)?.getData()
        const spokesChildren: Array<HTMLApexPlotOptionsPolarAreaSpokesElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-polar-area-spokes') ?? []) as Array<HTMLApexPlotOptionsPolarAreaSpokesElement>
        this.spokes = await spokesChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexPlotOptions['polarArea'], undefined>> {
        return {
        	rings: this.rings,
        	spokes: this.spokes,
        }
    }

    @Prop()
    rings?: { strokeWidth?: number | undefined; strokeColor?: string | undefined; };
    @Prop()
    spokes?: { strokeWidth?: number | undefined; connectorColors?: string | string[] | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
