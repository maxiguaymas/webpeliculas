import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula.models';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() actualizarComponente = new EventEmitter<string>();
  @Output() results_search = new EventEmitter<Pelicula[]>();
  title!: string;
  description!: string;
  search_pelicula!: string;
  constructor(private _PeliculasService: PeliculasService,private _router: Router) { }

  ngOnInit(): void {
  }

  submitForm(form:any){
    console.log(this.title,this.description);
    this._PeliculasService.savePelicula(this.title,this.description);
    this.actualizarComponente.emit("true");
    form.reset();
    
  }

  search(form:any){
    let results:Pelicula[] =this._PeliculasService.search(this.search_pelicula,this._PeliculasService.getDataStorage());
    this.results_search.emit(results);
    form.reset();
  }

}
