import * as api from './api.js';
import { key } from '../auth.js';

const apiKey = `&api_key=${key.flickr.key}`;
const host = (api.settings.host =
  'https://www.flickr.com/services/rest/?method=flickr.photos.search' + apiKey);
api.settings.host = host;

export async function searchPic(query) {
  return await api.get(host + `&tags=${query}&format=json&nojsoncallback=1`);
}
