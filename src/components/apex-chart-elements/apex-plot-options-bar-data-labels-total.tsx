import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-bar-data-labels-total","shadow":true})
export class ApexPlotOptionsBarDataLabelsTotal {
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
        const styleChildren: Array<HTMLApexPlotOptionsBarDataLabelsTotalStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-bar-data-labels-total-style') ?? []) as Array<HTMLApexPlotOptionsBarDataLabelsTotalStyleElement>
        this.style = await styleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexPlotOptions['bar'], undefined>['dataLabels'], undefined>['total'], undefined>> {
        return {
        	enabled: this.enabled,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	style: this.style,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    style?: { color?: string | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
