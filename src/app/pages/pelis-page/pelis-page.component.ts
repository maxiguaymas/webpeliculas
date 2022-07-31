import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.models';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelis-page',
  templateUrl: './pelis-page.component.html',
  styleUrls: ['./pelis-page.component.css']
})
export class PelisPageComponent implements OnInit {
  peliculas!: Pelicula[];
  constructor(private _PeliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculas = this._PeliculasService.getDataStorage();
  }

  actualizar(event:any){
    this.ngOnInit()
  }

  listResults(event: any){
    this.ngOnInit();
    this.peliculas = event;
    console.log(event);

  }

}
