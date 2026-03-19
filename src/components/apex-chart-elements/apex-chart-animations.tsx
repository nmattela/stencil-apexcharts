import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-chart-animations","shadow":true})
export class ApexChartAnimations {
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
        const animateGraduallyChildren: Array<HTMLApexChartAnimationsAnimateGraduallyElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-animations-animate-gradually') ?? []) as Array<HTMLApexChartAnimationsAnimateGraduallyElement>
        this.animateGradually = await animateGraduallyChildren.at(0)?.getData()
        const dynamicAnimationChildren: Array<HTMLApexChartAnimationsDynamicAnimationElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-chart-animations-dynamic-animation') ?? []) as Array<HTMLApexChartAnimationsDynamicAnimationElement>
        this.dynamicAnimation = await dynamicAnimationChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexChart['animations'], undefined>> {
        return {
        	enabled: this.enabled,
        	speed: this.speed,
        	animateGradually: this.animateGradually,
        	dynamicAnimation: this.dynamicAnimation,
        }
    }

    @Prop()
    enabled?: boolean;
    @Prop()
    speed?: number;
    @Prop()
    animateGradually?: { enabled?: boolean | undefined; delay?: number | undefined; };
    @Prop()
    dynamicAnimation?: { enabled?: boolean | undefined; speed?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
