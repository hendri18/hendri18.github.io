import "regenerator-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.scss";
import "./actions/covid-map.js";
import "./components/nav-top-bar.js";
import "./components/country-list.js";
import "./components/country-search.js";
import main from "./actions/main.js";

document.addEventListener("DOMContentLoaded", main);