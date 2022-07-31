import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.models';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula!: Pelicula;
  @Output() edited = new EventEmitter<Pelicula>();
  @Output() delete_pelicula = new EventEmitter<Pelicula>();
  edit: boolean = false;
  title!: string;
  description!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  setEdit(){
    this.edit= !this.edit;
  }

  submitForm(form:any){
    this.pelicula.title = this.title;
    this.pelicula.description = this.description;
    this.edited.emit(this.pelicula);
    
    form.reset();
    this.setEdit();
  }

  delete(){
    this.delete_pelicula.emit(this.pelicula);
  }

}
