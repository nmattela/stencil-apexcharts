import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-toolbar-tools-custom-icons-item","shadow":true})
export class ApexChartToolbarToolsCustomIconsItem {
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
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<Exclude<globalThis.ApexChart['toolbar'], undefined>['tools'], undefined>['customIcons'], undefined>[0]> {
        return {
        	icon: this.icon,
        	title: this.title,
        	index: this.index,
        	class: this.class,
        }
    }

    @Prop()
    icon?: string;
    @Prop()
    title?: string;
    @Prop()
    index?: number;
    @Prop()
    class?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
