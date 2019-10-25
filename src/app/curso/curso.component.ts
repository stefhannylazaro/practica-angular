import { Component, OnInit } from '@angular/core';
import {Curso} from '../models/curso';
import { Router, ActivatedRoute, Params } from '@angular/router';//pasar parámetro


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public cursos:Array<Curso>;//Creo un array de objetos de tipo curso
  public nombreCursos:String[];
  public color:String="blue";
  public nombreCurso:String;

  constructor(private _router: Router,private _route: ActivatedRoute) {
    this.nombreCursos=[];//inicializar array  
    this.cursos=[
      new Curso("Angular",500,"Framework javascript",true),
      new Curso("Vue",300,"Framework javascript",true),
      new Curso("Laravel",500,"Framework php",false)
    ];
  }

  ngOnInit() {
    this.getNombres();
    this._route.params.subscribe(params=>{
      console.log(params);
    });
  }
  getNombres(){
    this.cursos.forEach((item,index)=>{
      this.nombreCursos.push(item.nombre);
    })
  }
  addNombreCurso(){
    this.nombreCursos.push(this.nombreCurso);
  }

  borrarNombreCurso(index:number){
    this.nombreCursos.splice(index,1);
  }
  onBlur(elem:any){
    console.log(elem);
  }
  verTexto(){
    alert(this.nombreCurso);
  }
}
