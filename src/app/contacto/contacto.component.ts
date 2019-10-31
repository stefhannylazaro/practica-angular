import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario:Usuario;
  public tipoMensaje:String="";
  public txtMensaje:String="";
  public showNotify:Boolean=false;
  constructor() {
    this.usuario=new Usuario("","","");
  }
  ngOnInit() {
  }
  onSubmit(form:any){
    //form.reset();
    this.showNotify=true;
    this.tipoMensaje="success";
    this.txtMensaje="Enviado con exito";
    setTimeout(()=>{
      this.showNotify=false;
    },5000);
    console.log(this.usuario);
  }

  getInfo(event){
    console.log(event);//contiene el valor enviado
  }

}
