import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis-group","shadow":true})
export class ApexXAxisGroup {
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
        const groupsChildren: Array<HTMLApexXAxisGroupGroupsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-group-groups-list') ?? []) as Array<HTMLApexXAxisGroupGroupsListElement>
        this.groups = await groupsChildren.at(0)?.getData()
        const styleChildren: Array<HTMLApexXAxisGroupStyleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-group-style') ?? []) as Array<HTMLApexXAxisGroupStyleElement>
        this.style = await styleChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexXAxis['group'], undefined>> {
        return {
        	groups: this.groups,
        	style: this.style,
        }
    }

    @Prop()
    groups?: { title: string; cols: number; }[];
    @Prop()
    style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
