import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-data-labels-background","shadow":true})
export class ApexDataLabelsBackground {
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
    async getData(): Promise<Exclude<globalThis.ApexDataLabels['background'], undefined>> {
        return {
        	enabled: this.enabled,
        	foreColor: this.foreColor,
        	backgroundColor: this.backgroundColor,
        	borderRadius: this.borderRadius,
        	padding: this.padding,
        	opacity: this.opacity,
        	borderWidth: this.borderWidth,
        	borderColor: this.borderColor,
        	dropShadow: this.dropShadow,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    foreColor?: string;
    @Prop()
    backgroundColor?: string;
    @Prop()
    borderRadius?: number;
    @Prop()
    padding?: number;
    @Prop()
    opacity?: number;
    @Prop()
    borderWidth?: number;
    @Prop()
    borderColor?: string;
    @Prop()
    dropShadow?: ApexDropShadow;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
