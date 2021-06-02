import { html, render } from '../node_modules/lit-html/lit-html.js';
import { tile } from './components/tile.js';
import { searchPasta } from './api/data.js';

const main = document.getElementById('main');

const homeTemplate = (result, onSearch) => html`
  <header class="header">
    <a class="logo">PastaGram</a>
    <button @click=${onSearch} class="searchBtn">some PASTA</button>
  </header>
  <div class="image-grid">${result.map(tile)}</div>
`;

let result = [];
render(homeTemplate(result, onSearch), main);

async function onSearch(e) {
  e.preventDefault();
  const final = await searchPasta();
  window.scroll(0, document.body.scrollHeight);

  final.results.map((r) => result.push(r.urls.regular));

  render(homeTemplate(result, onSearch), main);
}
