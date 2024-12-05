import {Cat} from "../model/Cat.js";

export class CatService {
    #API_KEY =
        "live_e969kGjYOiD5EAmM0ewuFl6jKm7rddZzJk6IoXOKCsp4mluAYdMjGyZJPs9HdqCt";

    #URL_API_CAT = "https://api.thecatapi.com/v1/images";

    #BASE_URL = "https://api.thecatapi.com/v1";

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

    async uploadImages(image) {

        const url = this.#BASE_URL + "/images/upload";

        // Crear un objeto FormData para adjuntar el archivo
        const formData = new FormData();


        formData.append("file", image);

        const response = await fetch(url, {
            method: "POST",
            headers: new Headers({
                "x-api-key": this.#API_KEY,
            }),
            body: formData, // Pasar el FormData como body
        })

        const data = await response.json();

    }
}
