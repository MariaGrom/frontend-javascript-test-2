class Api{
    constructor ({ baseUrl, apiKey}){
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
        console.log(this._apiKey)
    }

    search(query) {
        
        return fetch(`${this._baseUrl}/books/v1/volumes?q=${query}&key=${this._apiKey}`)
        
        // .then(res => res.json())
        .then(res => console.log('!'))
    }
}

const api = new Api({
    baseUrl: "https://www.googleapis.com",
    apiKey: "AIzaSyBdPGPmyXVtSoNGXpZBIqi-YLcjgyOhtj0"
  });

  export default api;

  