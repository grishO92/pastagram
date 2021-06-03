import { render } from '../node_modules/lit-html/lit-html.js';
import { homeTemplate, onSearch, result } from './components/homePage.js';

const main = document.getElementById('main');

render(homeTemplate(result, onSearch), main);
