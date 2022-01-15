import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
