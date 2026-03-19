import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"annotation-label","shadow":true})
export class AnnotationLabel {
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
        const textChildren: Array<HTMLAnnotationLabelTextListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'annotation-label-text-list') ?? []) as Array<HTMLAnnotationLabelTextListElement>
        this.text = await textChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.AnnotationLabel> {
        return {
        	borderColor: this.borderColor,
        	borderWidth: this.borderWidth,
        	borderRadius: this.borderRadius,
        	textAnchor: this.textAnchor,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	position: this.position,
        	orientation: this.orientation,
        	text: this.text,
        	style: this.style,
        	mouseEnter: this.mouseEnter,
        	mouseLeave: this.mouseLeave,
        	click: this.click,
        }
    }

    @Prop()
    borderColor?: string;
    @Prop()
    borderWidth?: number;
    @Prop()
    borderRadius?: number;
    @Prop()
    textAnchor?: string;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    position?: string;
    @Prop()
    orientation?: string;
    @Prop()
    text?: string | string[];
    @Prop()
    style?: AnnotationStyle;
    @Prop()
    mouseEnter?: Function;
    @Prop()
    mouseLeave?: Function;
    @Prop()
    click?: Function;

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
