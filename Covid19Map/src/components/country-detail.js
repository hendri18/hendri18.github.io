import moment from "moment";
class CountryDetail extends HTMLElement {

    constructor() {
        super();
        this._country = null;
    }

    set country(country) {
        this._country = country ?? null;
        this.render();
        const closeBtn = document.createElement('div');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener("click", () => {
            document.getElementById('card-country-detail-backdrop').style.display = 'none';
        });
        document.getElementById('card-country-detail-backdrop').appendChild(closeBtn)
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="card-country-detail-backdrop" style="${this._country ? 'display:block' : 'display:none'}">
            <div class="card border-warning mb-3 card-country-detail" style="width: 22rem;">
                <div class="card-header bg-warning border-warning">${this._country ? this._country.name.toLocaleUpperCase() : '-'}</div>
                <div class="card-body">
                    <p class="card-text">Total Kasus Terkonfirmasi : ${this._country ? this._country.confirmed.value : '-'}</p>
                    <p class="card-text">Total Sembuh : ${this._country ? this._country.recovered.value : '-'}</p>
                    <p class="card-text">Total Kematian: ${this._country ? this._country.deaths.value : '-'}</p>
                    <p class="text-end m-0"><small><i>Last Updated : ${this._country ? moment(this._country.lastUpdate).format("DD, MMM YYYY")  : ''}</i></small></p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("country-detail", CountryDetail);