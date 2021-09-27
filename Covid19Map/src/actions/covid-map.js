import * as am4maps from "@amcharts/amcharts4/maps"
import * as am4core from "@amcharts/amcharts4/core"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

const covid_map = () => {
    let chart = am4core.create(
        document.getElementById("covid-map"),
        am4maps.MapChart
    );
    chart.geodata = am4geodata_worldLow;

}

export default covid_map;

