import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {
  @Input() public msgClass:String;
  @Input() public msg:String;
  @Output() getLoad=new EventEmitter();//genero un evento
  public tipoClase:String;
  public loadInfo:String;
  constructor() {
    this.loadInfo="No";
  }

  ngOnInit() {
    this.loadInfo="si";
    console.log("tipo del mensaje");
    console.log(this.msgClass);
    switch(this.msgClass){
      case "success":
        this.tipoClase="m-success";
        break;
      case "error":
        this.tipoClase="m-error";
        break;
      default:
        this.tipoClase="m-notify";
    }
    console.log(this.msg);
  }
  lanzar(event){
    console.log(event);
    this.getLoad.emit(this.loadInfo);//esto será lo que se recibirá en el comp.padre
  }

}
