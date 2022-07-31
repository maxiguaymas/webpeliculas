import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.models';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  id: number = 0;

  constructor() { }

  InitStorage(){
    let pelicula:Pelicula = {
      id: 0,
      title: 'Batman',
      description: 'Batman es un superhéroe de cómic co-creado por el artista Bob Kane y el escritor Bill Finger y publicado por DC Comics.'
    };
    let peliculas: Pelicula[] = [pelicula];

    localStorage.setItem("peliculas",JSON.stringify(peliculas));
  }
  getDataStorage(){
    let peliculas: Pelicula[] = JSON.parse(localStorage.getItem('peliculas')!);

    return peliculas;
  };

  getDataStorageLatest(){
    let peliculas: Pelicula[] = JSON.parse(localStorage.getItem('peliculas')!);
    peliculas.reverse();
    if(peliculas.length >= 6 ){
      peliculas.splice(5);
    }
    return peliculas;
  }

  SaveDataStorage(data:Pelicula[]){
    localStorage.setItem("peliculas",JSON.stringify(data));
  }

  savePelicula(title:string, description: string){
    let peliculas:Pelicula[] = this.getDataStorage();
    
    if(title != "" && description !=""){
      this.id++; // aumentamos +1 el id cada vez que guardamos
      let id = this.id;
      // crear objeto a guardar
      let pelicula:Pelicula={
          id,
          title,
          description
      };

      // añadir la pelicula al array de peliculas
      peliculas.push(pelicula);

      // guardar en el local storage
      this.SaveDataStorage(peliculas);
      console.log(this.getDataStorage());      
    }
    else{
        alert("Todos los campos son obligatorios");
    }

  }

  search(search: string, listaPeliculas: Pelicula[]){
    const search_peliculas: Pelicula[] = listaPeliculas.filter(pelicula =>{
      return pelicula.title.toLowerCase().includes(search.toLowerCase());
    });

    if(search_peliculas.length <= 0) {
      console.log("no hay coincidencias");
      // content.innerHTML = "<div class='result'><h2 class='result-search'>No hay coincidencias</h2></div>";
    }

    return search_peliculas;
  }

}

