import '../components/country-list.js';
import CovidMap from "../actions/covid-map.js";
import FetchData from "../actions/fetch-data.js";

const main = async () => {
    CovidMap();
    const countryList = document.querySelector("country-list");
    const searchCountry = document.getElementById('country-search');
    const getCountries = await FetchData.getCountries();
    if(getCountries.countries) countryList.countries = getCountries.countries;

    searchCountry.addEventListener('keyup', (e) => {
        let value = e.target.value ?? '';
        countryList.countries = getCountries.countries.filter((item) => (item.name.toLowerCase()).indexOf(value.toLowerCase()) !== -1);
    });



    chart.zoomToMapObject(polygonSeries.getPolygonById('IN'));
};

export default main;