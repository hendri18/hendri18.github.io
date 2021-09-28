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
            <div class="list-group list-group-flush">
                <div id="country-list-item">
                    ${this._countries.length < 1 ? '<div class="list-group-item"><strong>Negara tidak ditemukan</strong></div>' : this._countries.map((item, index) => `<a class="list-group-item">${item.name}</a>`).join('')}
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("country-list", CountryList);