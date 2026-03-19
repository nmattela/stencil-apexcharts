import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-options","shadow":true})
export class ApexOptions {
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
        const colorsChildren: Array<HTMLApexOptionsColorsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-options-colors-list') ?? []) as Array<HTMLApexOptionsColorsListElement>
        this.colors = await colorsChildren.at(0)?.getData()
        const labelsChildren: Array<HTMLApexOptionsLabelsListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-options-labels-list') ?? []) as Array<HTMLApexOptionsLabelsListElement>
        this.labels = await labelsChildren.at(0)?.getData()
        const responsiveChildren: Array<HTMLApexOptionsResponsiveListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-options-responsive-list') ?? []) as Array<HTMLApexOptionsResponsiveListElement>
        this.responsive = await responsiveChildren.at(0)?.getData()
        const yaxisChildren: Array<HTMLApexOptionsYaxisListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-options-yaxis-list') ?? []) as Array<HTMLApexOptionsYaxisListElement>
        this.yaxis = await yaxisChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<ApexChartsApexOptions> {
        return {
        	series: this.series,
        	annotations: this.annotations,
        	chart: this.chart,
        	colors: this.colors,
        	dataLabels: this.dataLabels,
        	fill: this.fill,
        	forecastDataPoints: this.forecastDataPoints,
        	grid: this.grid,
        	labels: this.labels,
        	legend: this.legend,
        	markers: this.markers,
        	noData: this.noData,
        	plotOptions: this.plotOptions,
        	responsive: this.responsive,
        	parsing: this.parsing,
        	states: this.states,
        	stroke: this.stroke,
        	subtitle: this.subtitle,
        	theme: this.theme,
        	title: this.title,
        	tooltip: this.tooltip,
        	xaxis: this.xaxis,
        	yaxis: this.yaxis,
        }
    }

    @Prop()
    series?: ApexNonAxisChartSeries;
    @Prop()
    annotations?: ApexAnnotations;
    @Prop()
    chart?: ApexChart;
    @Prop()
    colors?: any[];
    @Prop()
    dataLabels?: ApexDataLabels;
    @Prop()
    fill?: ApexFill;
    @Prop()
    forecastDataPoints?: ApexForecastDataPoints;
    @Prop()
    grid?: ApexGrid;
    @Prop()
    labels?: string[];
    @Prop()
    legend?: ApexLegend;
    @Prop()
    markers?: ApexMarkers;
    @Prop()
    noData?: ApexNoData;
    @Prop()
    plotOptions?: ApexPlotOptions;
    @Prop()
    responsive?: ApexResponsive[];
    @Prop()
    parsing?: ApexParsing;
    @Prop()
    states?: ApexStates;
    @Prop()
    stroke?: ApexStroke;
    @Prop()
    subtitle?: ApexTitleSubtitle;
    @Prop()
    theme?: ApexTheme;
    @Prop()
    title?: ApexTitleSubtitle;
    @Prop()
    tooltip?: ApexTooltip;
    @Prop()
    xaxis?: ApexXAxis;
    @Prop()
    yaxis?: ApexYAxis | ApexYAxis[];

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
