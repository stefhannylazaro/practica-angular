import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector:'videojuego',
    templateUrl:'./videojuego.component.html',
    styleUrls:['./videojuego.component.scss']
})

export class VideojuegoComponent implements OnInit,DoCheck,OnDestroy{
    public titulo:string;
    
    constructor(){
        this.titulo="Videojuegos 2019";
        console.log("componente videojuego");
    }
    ngOnInit(){
        console.log("Componente - OnInit");
    }
    ngDoCheck(){
        console.log("Componente - DoCheck");
    }
    ngOnDestroy(){
        console.log("Componente - OnDestroy");
    }
    updateTitle(){
        this.titulo="Videojuegos 2019 update";
    }   
}
