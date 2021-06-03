import * as api from './api.js';

const apiKey = ''; //<-- put your API_KEY here
const host =
  (api.settings.host = `https://api.unsplash.com/search/photos/?client_id=${apiKey}`);
api.settings.host = host;
let page = 1;

export async function searchPasta() {
  return await api.get(host + `&query=pasta&per_page=30&page=${page++}`);
}
