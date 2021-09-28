import axios from 'axios';

class FetchData {

    
    static BASE_URL = 'https://covid19.mathdro.id/api';
    

    static searchClub(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.teams) {
                    return Promise.resolve(responseJson.teams);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }

    static getCountries(){
        return axios.get(`${this.BASE_URL}/countries`)
            .then((response)=>{
                if(response.data) return response.data;
                return false;
            }).catch((err)=>{
                alert(err)
                return false;
            });
    }

    static getCountryDetail(country){
        return axios.get(`${this.BASE_URL}/countries/${country}`)
            .then((response)=>{
                if(response.data) return response.data;
                return false;
            }).catch((err)=>{
                alert(err)
                return false;
            });
    }
}

export default FetchData;