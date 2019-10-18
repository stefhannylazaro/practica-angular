import { Component,OnInit } from '@angular/core';//modulos o objetos a importar y en from le indicamos el paquete
import { configuracion} from './models/configuracion';
@Component({//decorador, aqui configuro el componente
  selector: 'app-root',//nombre de la etiqueta
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title:string = 'Angular';//
  public descripcion:string;
  public show:boolean=true;
  public isClick:boolean=false;//hoy

  constructor(){
    this.title=configuracion.titulo;
    this.descripcion=configuracion.descripcion;
  }

  ngOnInit(){
    console.log("cargó componente app");
  }
  verVideojuego(value:boolean){
    this.show=value;
  }
  open(item:any){
    console.log(item);
    this.isClick=!this.isClick; 
    //console.log(document.getElementById(item.id).nextElementSibling);//accedo al elemento hermano
  }
}
