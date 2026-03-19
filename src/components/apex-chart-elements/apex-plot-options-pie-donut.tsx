import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-pie-donut","shadow":true})
export class ApexPlotOptionsPieDonut {
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
        const labelsChildren: Array<HTMLApexPlotOptionsPieDonutLabelsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-pie-donut-labels') ?? []) as Array<HTMLApexPlotOptionsPieDonutLabelsElement>
        this.labels = await labelsChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['pie'], undefined>['donut'], undefined>> {
        return {
        	size: this.size,
        	background: this.background,
        	labels: this.labels,
        }
    }

    @Prop()
    size?: string;
    @Prop()
    background?: string;
    @Prop()
    labels?: { show?: boolean | undefined; name?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; } | undefined; value?: { show?: boolean | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; color?: string | undefined; offsetY?: number | undefined; formatter?(val: string): string; } | undefined; total?: { show?: boolean | undefined; showAlways?: boolean | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; label?: string | undefined; color?: string | undefined; formatter?(w: any): string; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
