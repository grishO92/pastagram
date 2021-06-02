import { html, render } from '../node_modules/lit-html/lit-html.js';
import { tile } from './components/tile.js';
import { searchPic } from './api/data.js';

const main = document.getElementById('main');

const homeTemplate = (result, onSearch) => html`
  <header class="header">
    <a class="logo">PastaGram</a>
    <nav>
      <form @submit=${onSearch}>
        <input
          class="seachFld"
          type="text"
          placeholder="search for your favorite pasta"
          name="search"
        />
        <input class="searchBtn" type="submit" value="Search" />
      </form>
    </nav>
  </header>
  <div id="image-grid">${result.map(tile)}</div>
  <footer class="footer">&copy; No copyrights</footer>
`;
async function searchPage() {
  let result = [];
  render(homeTemplate(result, onSearch), main);

  async function onSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search');
    const final = await searchPic(query);
    const results = final.photos.photo;
    results.map((pic) =>
      result.push(
        `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
      )
    );
    console.log(result);
    e.target.reset();
    render(homeTemplate(result, onSearch), main);
  }
}
searchPage();
