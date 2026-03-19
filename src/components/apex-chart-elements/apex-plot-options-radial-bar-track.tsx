import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-plot-options-radial-bar-track","shadow":true})
export class ApexPlotOptionsRadialBarTrack {
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
        const backgroundChildren: Array<HTMLApexPlotOptionsRadialBarTrackBackgroundListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-plot-options-radial-bar-track-background-list') ?? []) as Array<HTMLApexPlotOptionsRadialBarTrackBackgroundListElement>
        this.background = await backgroundChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<Exclude<globalThis.ApexPlotOptions['radialBar'], undefined>['track'], undefined>> {
        return {
        	show: this.show,
        	startAngle: this.startAngle,
        	endAngle: this.endAngle,
        	strokeWidth: this.strokeWidth,
        	opacity: this.opacity,
        	margin: this.margin,
        	background: this.background,
        	dropShadow: this.dropShadow,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    startAngle?: number;
    @Prop()
    endAngle?: number;
    @Prop()
    strokeWidth?: string;
    @Prop()
    opacity?: number;
    @Prop()
    margin?: number;
    @Prop()
    background?: string | string[];
    @Prop()
    dropShadow?: ApexDropShadow;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
