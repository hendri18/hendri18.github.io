class CountrySearch extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
            <input type="search" id="search-country" class="form-control search-input" placeholder="Cari Negara">
        `;
    }
}

customElements.define("country-search", CountrySearch);