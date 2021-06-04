import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { searchPasta } from '../api/data.js';

export const homeTemplate = (result, onSearch) => html`
  <header class="header">
    <a class="logo">PastaGram</a>
    <button @click=${onSearch} class="searchBtn">some PASTA</button>
  </header>
  <div class="image-grid">
    ${result.length > 0
      ? result.map((pic) => html` <img class="card" src=${pic} /> `)
      : html`
          <span class="clickThat"
            >Click the button above to load pasta images</span
          >
        `}
  </div>
`;
export let result = [];

export async function onSearch(e) {
  e.preventDefault();
  e.target.textContent = 'more PASTA';
  const final = await searchPasta();
  window.scroll(0, document.body.scrollHeight);

  final.results.map((r) => result.push(r.urls.regular));

  render(homeTemplate(result, onSearch), main);
}
