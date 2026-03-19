import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-drop-shadow","shadow":true})
export class ApexDropShadow {
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
    async getData(): Promise<globalThis.ApexDropShadow> {
        return {
        	enabled: this.enabled,
        	top: this.top,
        	left: this.left,
        	blur: this.blur,
        	opacity: this.opacity,
        	color: this.color,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    top?: number;
    @Prop()
    left?: number;
    @Prop()
    blur?: number;
    @Prop()
    opacity?: number;
    @Prop()
    color?: string;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
