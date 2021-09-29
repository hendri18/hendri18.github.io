class NavTopBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-md bg-orange">
            <a class="navbar-brand" href="#">Covid-19 Map</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                
            </div>
        </nav>
        `;
    }
}

customElements.define("nav-top-bar", NavTopBar);