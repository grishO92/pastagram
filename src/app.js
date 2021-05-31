import { html, render } from '../node_modules/lit-html/lit-html.js';

const main = document.getElementById('main');

const homePage = () => html` <header class="header">
  <nav>
    <form @click=${onSeach}>
      <input
        class="seachFld"
        type="search"
        placeholder="search for your favorite pasta"
      />
      <input class="searchBtn" type="submit" value="Search" />
    </form>
  </nav>
</header>`;

function onSeach(e) {
  e.preventDefault();
  console.log('click');
}

render(homePage(), main);
