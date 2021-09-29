class CountryList extends HTMLElement {

    constructor() {
        super();
        this._countries = [];
    }

    set clickDetailEvent(event){
        this._clickDetailEvent = event;
    }

    set countries(country) {
        this._countries = country ?? [];
        this.render();
        if(this._countries.length > 0){
            this._countries.forEach(item => {
                const list = document.createElement('li');
                list.classList.add('list-group-item');
                list.innerHTML = item.name;
                list.setAttribute('data-country', item.iso2);
                list.addEventListener("click", () => {
                    this._clickDetailEvent(item.name, item.iso2);
                });
                document.getElementById('country-list-item').appendChild(list)
            });
        }else{
            const list = document.createElement('li');
            list.classList.add('list-group-item');
            list.innerHTML = '<strong>Negara tidak ditemukan</strong>';
            document.getElementById('country-list-item').appendChild(list)
        }
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card card-country-list mt-4">
            <ul id="country-list-item" class="list-group list-group-flush"></ul>
        </div>
        `;
    }
}

customElements.define("country-list", CountryList);