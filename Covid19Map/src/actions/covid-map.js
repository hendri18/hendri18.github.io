import * as am4maps from "@amcharts/amcharts4/maps"
import * as am4core from "@amcharts/amcharts4/core"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_lang_EN from "@amcharts/amcharts4-geodata/lang/EN"; 

const CovidMap = (onClickEvent) => {
    let chart = am4core.create(
        document.getElementById("covid-map"),
        am4maps.MapChart
    );
    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();
    chart.chartContainer.wheelable = true;
    chart.zoomControl = new am4maps.ZoomControl();
    chart.zoomControl.fontSize = 22;
    chart.zoomControl.width = 50;
    chart.geodataNames = am4geodata_lang_EN;
    chart.homeZoomLevel = 5;
    chart.homeGeoPoint = {
        latitude: 15,
        longitude: 120
    };
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.mapPolygons.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    polygonSeries.exclude = ["AQ"];
    

    let worldMapTemplate = polygonSeries.mapPolygons.template;
    worldMapTemplate.applyOnClones = true;
    worldMapTemplate.togglable = true;
    worldMapTemplate.tooltipText = "{name}";
  
    let ss = worldMapTemplate.states.create("active");
    ss.properties.fill = '#fd7e14';
    worldMapTemplate.events.on("hit", (ev) => {
      let dataCountryMap = ev.target.dataItem.dataContext;
        onClickEvent(dataCountryMap.name, dataCountryMap.id);
        ev.target.series.chart.zoomToMapObject(ev.target);
    });
    
    window.chart = chart;
    window.polygonSeries = polygonSeries;
    window.worldMapTemplate = worldMapTemplate;
}

export default CovidMap;

