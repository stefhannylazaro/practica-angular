import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camisa',
  templateUrl: './camisa.component.html',
  styleUrls: ['./camisa.component.css']
})
export class CamisaComponent implements OnInit {
  public titulo:string="Camisa white";
  
  constructor() { }

  ngOnInit() {
  }

}
