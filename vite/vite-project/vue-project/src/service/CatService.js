import {Cat} from "../model/Cat.js";

export class CatService {
    #API_KEY =
        "live_e969kGjYOiD5EAmM0ewuFl6jKm7rddZzJk6IoXOKCsp4mluAYdMjGyZJPs9HdqCt";

    #URL_API_CAT = "https://api.thecatapi.com/v1/images";

    async findAll(limit = 10) {
        const url = `${this.#URL_API_CAT}/?limit=${limit}`;
        const response = await fetch(url, {
            method: "GET",
            headers: new Headers({
                "x-api-key": this.#API_KEY,
            })
        });

        const data = await response.json();
        return data.map((cat) => new Cat(cat.id, cat.name, cat.url, cat.widht, cat.height));
    }
}
