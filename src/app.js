import { html, render } from '../node_modules/lit-html/lit-html.js';
import { tile } from './components/tile.js';

const main = document.getElementById('main');

const homePage = () => html`
  <header class="header">
    <a class="logo">PastaGram</a>
    <nav>
      <form @submit=${onSeach}>
        <input
          class="seachFld"
          type="search"
          placeholder="search for your favorite pasta"
        />
        <input class="searchBtn" type="submit" value="Search" />
      </form>
    </nav>
  </header>
  <div class="photo-grid">
    <img class="card" src="static/pasta.png" />
    <img class="card" src="static/pasta.png" />
    <img class="card" src="static/lamp.jpeg" />
    <img class="card" src="static/pasta.png" />
    <img class="card" src="static/pasta.png" />
    <img class="card" src="static/pasta.png" />
    <img class="card" src="static/lamp.jpeg" />
    <img class="card" src="static/pasta.png" />
    <img class="card" src="static/pasta.png" />
    <img class="card" src="static/lamp.jpeg" />
    <img class="card" src="static/pasta.png" />
    <img class="card" src="static/pasta.png" />
  </div>
  <footer class="footer">&copy; No copyrights</footer>
`;

function onSeach(e) {
  e.preventDefault();
  console.log('click');
}

render(homePage(), main);
