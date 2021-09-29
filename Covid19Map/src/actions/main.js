import '../components/country-list.js';
import CovidMap from "../actions/covid-map.js";
import FetchData from "../actions/fetch-data.js";

const main = async () => {
    
    const countryList = document.querySelector("country-list");
    const countrySearch = document.getElementById('country-search');
    const countryDetail = document.querySelector('country-detail');
    const loadingFetch = document.querySelector('loading-fetch');
    const countryDetailBackdrop = document.getElementById('card-country-detail-backdrop');
    loadingFetch.setLoading = true;
    const getCountries = await FetchData.getCountries();
    
    if(getCountries.countries) countryList.countries = getCountries.countries;
    const onClickCountry = async (country, country_code) => {
        try{
            if(window.lastSelected){
                window.lastSelected.isActive = false;
            }
            loadingFetch.setLoading = true;
            countryDetail.country = null;
            const getCountryDetail = await FetchData.getCountryDetail(country_code);
            if(getCountryDetail){
                getCountryDetail.name = country;
                countryDetail.country = getCountryDetail;
            }
            window.lastSelected = polygonSeries.getPolygonById(country_code);
            chart.zoomToMapObject(window.lastSelected);
            window.lastSelected.isActive = true;
            
            loadingFetch.setLoading = false;
        } catch (message) {
            countryDetail.country = null;
            loadingFetch.setLoading = false;
        }
    };
    CovidMap(onClickCountry);
    countryList.clickDetailEvent = onClickCountry;
    loadingFetch.setLoading = false;
    countrySearch.addEventListener('keyup', (e) => {
        let value = e.target.value ?? '';
        countryList.countries = getCountries.countries.filter((item) => (item.name.toLowerCase()).indexOf(value.toLowerCase()) !== -1);
    });

};

export default main;