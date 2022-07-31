import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.models';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  peliculas!: Pelicula[];
  disabled: boolean = true;
  constructor(private _PeliculasService: PeliculasService) { }

  ngOnInit(): void {
    if(!localStorage.getItem('peliculas')){
      this._PeliculasService.InitStorage();
    }
    
    this.peliculas = this._PeliculasService.getDataStorageLatest();
    
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
