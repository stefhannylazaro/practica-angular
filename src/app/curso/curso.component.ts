import { Component, OnInit } from '@angular/core';
import {Curso} from '../models/curso';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public cursos:Array<Curso>;//Creo un array de objetos de tipo curso
  
  constructor() {
    this.cursos=[
      new Curso("Angular",500,"Framework javascript"),
      new Curso("Laravel",500,"Framework php")
    ];
  }

  ngOnInit() {
    console.log(this.cursos);
  }
  
}
