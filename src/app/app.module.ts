import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//para trabajar con formularios
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { VideojuegoComponent} from './videojuego/videojuego.component';
import { FooterComponent } from './footer/footer.component';
import { CursoComponent } from './curso/curso.component';
import { CamisaComponent } from './camisa/camisa.component';
import { HomeComponent } from './home/home.component';
import { C404Component } from './c404/c404.component';
@NgModule({//decorador que permite configurar el modulo
  declarations: [
    AppComponent,
    VideojuegoComponent,
    FooterComponent,
    CursoComponent,
    CamisaComponent,
    HomeComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
