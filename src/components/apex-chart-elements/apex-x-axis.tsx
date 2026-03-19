import { ApexOptions as ApexChartsApexOptions } from "apexcharts";
import { Component, Method, Prop, Event, Element, h } from "@stencil/core";

@Component({"tag":"apex-x-axis","shadow":true})
export class ApexXAxis {
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
        const overwriteCategoriesChildren: Array<HTMLApexXAxisOverwriteCategories1ListElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-overwrite-categories-1-list') ?? []) as Array<HTMLApexXAxisOverwriteCategories1ListElement>
        this.overwriteCategories = await overwriteCategoriesChildren.at(0)?.getData()
        const labelsChildren: Array<HTMLApexXAxisLabelsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-labels') ?? []) as Array<HTMLApexXAxisLabelsElement>
        this.labels = await labelsChildren.at(0)?.getData()
        const groupChildren: Array<HTMLApexXAxisGroupElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-group') ?? []) as Array<HTMLApexXAxisGroupElement>
        this.group = await groupChildren.at(0)?.getData()
        const axisBorderChildren: Array<HTMLApexXAxisAxisBorderElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-axis-border') ?? []) as Array<HTMLApexXAxisAxisBorderElement>
        this.axisBorder = await axisBorderChildren.at(0)?.getData()
        const axisTicksChildren: Array<HTMLApexXAxisAxisTicksElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-axis-ticks') ?? []) as Array<HTMLApexXAxisAxisTicksElement>
        this.axisTicks = await axisTicksChildren.at(0)?.getData()
        const titleChildren: Array<HTMLApexXAxisTitleElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-title') ?? []) as Array<HTMLApexXAxisTitleElement>
        this.title = await titleChildren.at(0)?.getData()
        const crosshairsChildren: Array<HTMLApexXAxisCrosshairsElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-crosshairs') ?? []) as Array<HTMLApexXAxisCrosshairsElement>
        this.crosshairs = await crosshairsChildren.at(0)?.getData()
        const tooltipChildren: Array<HTMLApexXAxisTooltipElement> = (this.slotElement?.assignedElements().filter(el => el.tagName.toLowerCase() === 'apex-x-axis-tooltip') ?? []) as Array<HTMLApexXAxisTooltipElement>
        this.tooltip = await tooltipChildren.at(0)?.getData()
    }

    @Method()
    async getData(): Promise<globalThis.ApexXAxis> {
        return {
        	type: this.type,
        	categories: this.categories,
        	offsetX: this.offsetX,
        	offsetY: this.offsetY,
        	sorted: this.sorted,
        	tickPlacement: this.tickPlacement,
        	tickAmount: this.tickAmount,
        	stepSize: this.stepSize,
        	min: this.min,
        	max: this.max,
        	range: this.range,
        	floating: this.floating,
        	decimalsInFloat: this.decimalsInFloat,
        	position: this.position,
        	overwriteCategories: this.overwriteCategories,
        	labels: this.labels,
        	group: this.group,
        	axisBorder: this.axisBorder,
        	axisTicks: this.axisTicks,
        	title: this.title,
        	crosshairs: this.crosshairs,
        	tooltip: this.tooltip,
        }
    }

    @Prop()
    type?: "category" | "datetime" | "numeric";
    @Prop()
    categories?: any;
    @Prop()
    offsetX?: number;
    @Prop()
    offsetY?: number;
    @Prop()
    sorted?: boolean;
    @Prop()
    tickPlacement?: string;
    @Prop()
    tickAmount?: number | "dataPoints";
    @Prop()
    stepSize?: number;
    @Prop()
    min?: number;
    @Prop()
    max?: number;
    @Prop()
    range?: number;
    @Prop()
    floating?: boolean;
    @Prop()
    decimalsInFloat?: number;
    @Prop()
    position?: string;
    @Prop()
    overwriteCategories?: number[] | string[] | undefined;
    @Prop()
    labels?: { show?: boolean | undefined; rotate?: number | undefined; rotateAlways?: boolean | undefined; hideOverlappingLabels?: boolean | undefined; showDuplicates?: boolean | undefined; trim?: boolean | undefined; minHeight?: number | undefined; maxHeight?: number | undefined; style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; } | undefined; offsetX?: number | undefined; offsetY?: number | undefined; format?: string | undefined; formatter?(value: string, timestamp?: number | undefined, opts?: any): string | string[]; datetimeUTC?: boolean | undefined; datetimeFormatter?: { year?: string | undefined; month?: string | undefined; day?: string | undefined; hour?: string | undefined; minute?: string | undefined; second?: string | undefined; } | undefined; };
    @Prop()
    group?: { groups?: { title: string; cols: number; }[] | undefined; style?: { colors?: string | string[] | undefined; fontSize?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; cssClass?: string | undefined; } | undefined; };
    @Prop()
    axisBorder?: { show?: boolean | undefined; color?: string | undefined; height?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };
    @Prop()
    axisTicks?: { show?: boolean | undefined; borderType?: string | undefined; color?: string | undefined; height?: number | undefined; offsetX?: number | undefined; offsetY?: number | undefined; };
    @Prop()
    title?: { text?: string | undefined; offsetX?: number | undefined; offsetY?: number | undefined; style?: { color?: string | undefined; fontFamily?: string | undefined; fontWeight?: string | number | undefined; fontSize?: string | undefined; cssClass?: string | undefined; } | undefined; };
    @Prop()
    crosshairs?: { show?: boolean | undefined; width?: string | number | undefined; position?: string | undefined; opacity?: number | undefined; stroke?: { color?: string | undefined; width?: number | undefined; dashArray?: number | undefined; } | undefined; fill?: { type?: string | undefined; color?: string | undefined; gradient?: { colorFrom?: string | undefined; colorTo?: string | undefined; stops?: number[] | undefined; opacityFrom?: number | undefined; opacityTo?: number | undefined; } | undefined; } | undefined; dropShadow?: ApexDropShadow | undefined; };
    @Prop()
    tooltip?: { enabled?: boolean | undefined; offsetY?: number | undefined; formatter?(value: string, opts?: object | undefined): string; style?: { fontSize?: string | undefined; fontFamily?: string | undefined; } | undefined; };

    render() {
        return (
        	<slot>
        	</slot>
        )
    }
}
