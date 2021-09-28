class CountryDetail extends HTMLElement {

    constructor() {
        super();
        this._country = [];
    }

    set country(country) {
        this._country = country;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card border-warning mb-3" style="max-width: 18rem;">
            <div class="card-header bg-transparent border-warning">${this._country.name ?? ''}</div>
            <div class="card-body text-warning">
                <h5 class="card-title">Success card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        `;
    }
}

customElements.define("country-detail", CountryDetail);