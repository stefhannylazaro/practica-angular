import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegoComponent} from './videojuego/videojuego.component';
import { FooterComponent } from './footer/footer.component';
import { CursoComponent } from './curso/curso.component';
import { CamisaComponent } from './camisa/camisa.component';
@NgModule({//decorador que permite configurar el modulo
  declarations: [
    AppComponent,
    VideojuegoComponent,
    FooterComponent,
    CursoComponent,
    CamisaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
