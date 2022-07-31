import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.models';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() title!:string;
  @Input() peliculas!: Pelicula[];
  @Input() disabled!: boolean;
  @Output() actualizarComponente = new EventEmitter<string>();
  constructor(private _peliculasService: PeliculasService) { }

  ngOnInit(): void {
    
  }

  actualizarStorage(event: any){
    console.log(event);
    let index = -1;
    let peliculas_storage = this._peliculasService.getDataStorage();
    peliculas_storage.forEach((pelicula,i) =>{
      if(pelicula.id == event.id) index =i;
    });
    console.log(index);
    peliculas_storage[index] = event;
    this._peliculasService.SaveDataStorage(peliculas_storage);
  }

  deletePelicula(event:any){
    let index = -1;
    let peliculas_storage = this._peliculasService.getDataStorage();
    peliculas_storage.forEach((pelicula,i) =>{
      if(pelicula.id == event.id) index =i;
    });
    console.log(index);
    peliculas_storage.splice(index,index+1);
    this._peliculasService.SaveDataStorage(peliculas_storage);
    this.actualizarComponente.emit("true");
  }

}
