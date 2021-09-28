class CountryList extends HTMLElement {

    constructor() {
        super();
        this._countries = [];
    }

    set countries(country) {
        this._countries = country;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card card-country-list mt-4">
            <ul id="country-list-item" class="list-group list-group-flush">
                ${this._countries.length < 1 ? '<li class="list-group-item"><strong>Negara tidak ditemukan</strong></li>' : this._countries.map((item, index) => `<li class="list-group-item" data-country-code="${item.iso2}">${item.name}</li>`).join('')}
            </ul>
        </div>
        `;
    }
}

customElements.define("country-list", CountryList);