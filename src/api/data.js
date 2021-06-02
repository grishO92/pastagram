import * as api from './api.js';
import { key } from '../auth.js';

const apiKey = `client_id=${key.unsplash.key}`;
const host = (api.settings.host = `https://api.unsplash.com/search/photos/?`);
api.settings.host = host;
let page = 1;

export async function searchPasta() {
  return await api.get(
    host + apiKey + `&query=pasta&per_page=30&page=${page++}`
  );
}
