import { Aeroport } from "../model/Aeropuerto.js";

export class AeropoertService {
  #url = "https://theteacher.codiblau.com/public/exercicis/airports";


   async load() {



    // fetch: hago una solicitud Http para obtener unos datos de esa Url,
    // y como tengo que esperar a recibir dicho datos
    // pongo await para poder sincronizar esta Promesa con mi codigo
    const response = await fetch(this.#url, {
      method: "GET",
    });
    // transformo estos datos a un formato json()
    const data = await response.json();
    // para saber los atributos tengo que usar un cosole.log
    // de esta forma puedo usar el map para crear los objetos
    // console.log(data)
    // con el map recorro cada elemento del json() y lo transformo en un objeto del tipo Aeropuerto
    // ese objeto se guarda en un nuevo Array y es lo que devuelvo cada vez que se llama a este
    // metodo load()
    return data.map((a) => new Aeroport(a.code, a.name, a.lat, a.lon, a.city));
  }

  cerca(ArrayAeroports, valorInput) {
    console.log("Cerca::", valorInput);
    // el filter() me devuelve un nuevo Array con los elementos
    // q han cumplido la condicion
    return ArrayAeroports.filter((a) => {
      const valorInputUpper = valorInput.toUpperCase();

      // includes() returns true if a string contains a specified string
      const hasNom = a.nom.toUpperCase().includes(valorInputUpper);

      const hasCodi = a.codi.toUpperCase().includes(valorInputUpper);

      const hasLong = a.longitud.toUpperCase().includes(valorInputUpper);
      const hasLat = a.latitud.toUpperCase().includes(valorInputUpper);
      const hasCiudad = a.ciutat.toUpperCase().includes(valorInputUpper);
      // si algun objeto Aeropuerto cumple con la condicion, este
      // devuelve true por el metodo includes() y con el return
      // cojo ese objeto y lo meto dentro del nuevo Array que he
      // creado con filter()
      return hasCodi || hasNom || hasLat || hasCiudad || hasLong;
    });
  }

}
//

