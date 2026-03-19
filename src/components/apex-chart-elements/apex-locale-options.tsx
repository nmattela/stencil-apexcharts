import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-locale-options","shadow":true})
export class ApexLocaleOptions {
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
        const monthsChildren: Array<HTMLApexLocaleOptionsMonthsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-months-list') ?? []) as Array<HTMLApexLocaleOptionsMonthsListElement>
        this.months = await monthsChildren.at(0)?.getData()
        const shortMonthsChildren: Array<HTMLApexLocaleOptionsShortMonthsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-short-months-list') ?? []) as Array<HTMLApexLocaleOptionsShortMonthsListElement>
        this.shortMonths = await shortMonthsChildren.at(0)?.getData()
        const daysChildren: Array<HTMLApexLocaleOptionsDaysListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-days-list') ?? []) as Array<HTMLApexLocaleOptionsDaysListElement>
        this.days = await daysChildren.at(0)?.getData()
        const shortDaysChildren: Array<HTMLApexLocaleOptionsShortDaysListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-short-days-list') ?? []) as Array<HTMLApexLocaleOptionsShortDaysListElement>
        this.shortDays = await shortDaysChildren.at(0)?.getData()
        const toolbarChildren: Array<HTMLApexLocaleOptionsToolbarElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-locale-options-toolbar') ?? []) as Array<HTMLApexLocaleOptionsToolbarElement>
        this.toolbar = await toolbarChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<Exclude<globalThis.ApexLocale['options'], undefined>> {
        return {
        	months: this.months,
        	shortMonths: this.shortMonths,
        	days: this.days,
        	shortDays: this.shortDays,
        	toolbar: this.toolbar,
        }
    }

    @Prop()
    months?: string[];
    @Prop()
    shortMonths?: string[];
    @Prop()
    days?: string[];
    @Prop()
    shortDays?: string[];
    @Prop()
    toolbar?: { download?: string | undefined; selection?: string | undefined; selectionZoom?: string | undefined; zoomIn?: string | undefined; zoomOut?: string | undefined; pan?: string | undefined; reset?: string | undefined; exportToSVG?: string | undefined; exportToPNG?: string | undefined; exportToCSV?: string | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
