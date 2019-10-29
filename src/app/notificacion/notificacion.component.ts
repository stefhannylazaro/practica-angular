import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit {
  @Input() public msgClass:String;
  @Input() public msg:String;
  public tipoClase:String;
  constructor() { }

  ngOnInit() {
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

}
