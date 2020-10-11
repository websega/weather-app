import { imageConfig } from '../config/apiConfig';

class UnsplashApi {
  constructor(config) {
    this.url = config.url;
    this.key = config.key;
  }

  async image(word) {
    try {
      const response = await fetch(
        `${this.url}/photos/random?client_id=${this.key}&query=${word},weather&orientation=landscape`
      );
      return response.json();
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

const imageApi = new UnsplashApi(imageConfig);

export default imageApi;
