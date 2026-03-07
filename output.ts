import { ApexOptions } from "apexcharts";
import { Component, Method } from "@stencil/core";

abstract class ApexChartElement<ApexType> {
    abstract getData(): Promise<ApexType>;
}

@Component({"tag":"apex-annotations","shadow":true})
class Apexannotations extends ApexChartElement<Exclude<ApexOptions['annotations'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['annotations'], undefined>> {
        return {}
    }
}

@Component({"tag":"apex-chart","shadow":true})
class Apexchart extends ApexChartElement<Exclude<ApexOptions['chart'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['chart'], undefined>> {
    }
}

@Component({"tag":"apex-colors","shadow":true})
class Apexcolors extends ApexChartElement<Exclude<ApexOptions['colors'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['colors'], undefined>> {
    }
}

@Component({"tag":"apex-dataLabels","shadow":true})
class ApexdataLabels extends ApexChartElement<Exclude<ApexOptions['dataLabels'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['dataLabels'], undefined>> {
    }
}

@Component({"tag":"apex-fill","shadow":true})
class Apexfill extends ApexChartElement<Exclude<ApexOptions['fill'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['fill'], undefined>> {
    }
}

@Component({"tag":"apex-forecastDataPoints","shadow":true})
class ApexforecastDataPoints extends ApexChartElement<Exclude<ApexOptions['forecastDataPoints'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['forecastDataPoints'], undefined>> {
    }
}

@Component({"tag":"apex-grid","shadow":true})
class Apexgrid extends ApexChartElement<Exclude<ApexOptions['grid'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['grid'], undefined>> {
    }
}

@Component({"tag":"apex-labels","shadow":true})
class Apexlabels extends ApexChartElement<Exclude<ApexOptions['labels'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['labels'], undefined>> {
    }
}

@Component({"tag":"apex-legend","shadow":true})
class Apexlegend extends ApexChartElement<Exclude<ApexOptions['legend'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['legend'], undefined>> {
    }
}

@Component({"tag":"apex-markers","shadow":true})
class Apexmarkers extends ApexChartElement<Exclude<ApexOptions['markers'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['markers'], undefined>> {
    }
}

@Component({"tag":"apex-noData","shadow":true})
class ApexnoData extends ApexChartElement<Exclude<ApexOptions['noData'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['noData'], undefined>> {
    }
}

@Component({"tag":"apex-plotOptions","shadow":true})
class ApexplotOptions extends ApexChartElement<Exclude<ApexOptions['plotOptions'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['plotOptions'], undefined>> {
    }
}

@Component({"tag":"apex-responsive","shadow":true})
class Apexresponsive extends ApexChartElement<Exclude<ApexOptions['responsive'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['responsive'], undefined>> {
    }
}

@Component({"tag":"apex-parsing","shadow":true})
class Apexparsing extends ApexChartElement<Exclude<ApexOptions['parsing'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['parsing'], undefined>> {
    }
}

@Component({"tag":"apex-series","shadow":true})
class Apexseries extends ApexChartElement<Exclude<ApexOptions['series'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['series'], undefined>> {
    }
}

@Component({"tag":"apex-states","shadow":true})
class Apexstates extends ApexChartElement<Exclude<ApexOptions['states'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['states'], undefined>> {
    }
}

@Component({"tag":"apex-stroke","shadow":true})
class Apexstroke extends ApexChartElement<Exclude<ApexOptions['stroke'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['stroke'], undefined>> {
    }
}

@Component({"tag":"apex-subtitle","shadow":true})
class Apexsubtitle extends ApexChartElement<Exclude<ApexOptions['subtitle'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['subtitle'], undefined>> {
    }
}

@Component({"tag":"apex-theme","shadow":true})
class Apextheme extends ApexChartElement<Exclude<ApexOptions['theme'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['theme'], undefined>> {
    }
}

@Component({"tag":"apex-title","shadow":true})
class Apextitle extends ApexChartElement<Exclude<ApexOptions['title'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['title'], undefined>> {
    }
}

@Component({"tag":"apex-tooltip","shadow":true})
class Apextooltip extends ApexChartElement<Exclude<ApexOptions['tooltip'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['tooltip'], undefined>> {
    }
}

@Component({"tag":"apex-xaxis","shadow":true})
class Apexxaxis extends ApexChartElement<Exclude<ApexOptions['xaxis'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['xaxis'], undefined>> {
    }
}

@Component({"tag":"apex-yaxis","shadow":true})
class Apexyaxis extends ApexChartElement<Exclude<ApexOptions['yaxis'], undefined>> {
    @Method()
    async getData(): Promise<Exclude<ApexOptions['yaxis'], undefined>> {
    }
}
