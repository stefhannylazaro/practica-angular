//importar modulos del router de angular
import {ModuleWithProviders} from '@angular/core';//modulo interno de angular que nos va a permitir trabajar con el routing
import {Routes, RouterModule} from '@angular/router';

//importar componentes
import {HomeComponent} from './home/home.component';
import {CursoComponent} from './curso/curso.component';
import {C404Component} from './c404/c404.component';


//Array de rutas
const appRoutes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'curso',component:CursoComponent},
  {path: 'curso/:nombre',component:CursoComponent},
  {path: '**',component:C404Component}
];

//Exportar el modulo del Router
export const appRoutingProviders:any[] = [];//exportamos el servicio del routing
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
