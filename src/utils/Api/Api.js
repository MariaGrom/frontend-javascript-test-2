class Api{
    constructor ({ baseUrl, apiKey}){
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
    }

    async search(query) {
        const res = await fetch(`${this._baseUrl}/books/v1/volumes?q=${query}&key=${this._apiKey}`);
        return await res.json();
    }
}

const api = new Api({
    baseUrl: "https://www.googleapis.com",
    apiKey: "AIzaSyBdPGPmyXVtSoNGXpZBIqi-YLcjgyOhtj0"
  });

  export default api;

  