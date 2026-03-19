import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-grid","shadow":true})
export class ApexGrid {
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
        const xaxisChildren: Array<HTMLApexGridXaxisElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-xaxis') ?? []) as Array<HTMLApexGridXaxisElement>
        this.xaxis = await xaxisChildren.at(0)?.getData()
        const yaxisChildren: Array<HTMLApexGridYaxisElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-yaxis') ?? []) as Array<HTMLApexGridYaxisElement>
        this.yaxis = await yaxisChildren.at(0)?.getData()
        const rowChildren: Array<HTMLApexGridRowElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-row') ?? []) as Array<HTMLApexGridRowElement>
        this.row = await rowChildren.at(0)?.getData()
        const columnChildren: Array<HTMLApexGridColumnElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-column') ?? []) as Array<HTMLApexGridColumnElement>
        this.column = await columnChildren.at(0)?.getData()
        const paddingChildren: Array<HTMLApexGridPaddingElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-grid-padding') ?? []) as Array<HTMLApexGridPaddingElement>
        this.padding = await paddingChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexGrid> {
        return {
        	show: this.show,
        	borderColor: this.borderColor,
        	strokeDashArray: this.strokeDashArray,
        	position: this.position,
        	xaxis: this.xaxis,
        	yaxis: this.yaxis,
        	row: this.row,
        	column: this.column,
        	padding: this.padding,
        }
    }

    @Prop()
    show?: boolean;
    @Prop()
    borderColor?: string;
    @Prop()
    strokeDashArray?: number;
    @Prop()
    position?: "front" | "back";
    @Prop()
    xaxis?: { lines?: { show?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; } | undefined; };
    @Prop()
    yaxis?: { lines?: { show?: boolean | undefined; offsetX?: number | undefined; offsetY?: number | undefined; } | undefined; };
    @Prop()
    row?: { colors?: string[] | undefined; opacity?: number | undefined; };
    @Prop()
    column?: { colors?: string[] | undefined; opacity?: number | undefined; };
    @Prop()
    padding?: { top?: number | undefined; right?: number | undefined; bottom?: number | undefined; left?: number | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
