import '../components/country-list.js';
import CovidMap from "../actions/covid-map.js";
import FetchData from "../actions/fetch-data.js";
import $ from "jquery";

const main = async () => {
    CovidMap();
    const countryList = document.querySelector("country-list");
    const getCountries = await FetchData.getCountries();
    if(getCountries.countries) countryList.countries = getCountries.countries;

    $('#search-country').on('keyup', (heh)=>{
        console.log(this)
        countryList.countries = getCountries.countries.filter((item) => item.name.indexOf($(this).val()));
    });
};

export default main;