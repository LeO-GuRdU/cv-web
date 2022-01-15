import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { HomeComponent } from './componentes/home/home.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


const icons = {
  alarm,
  alarmFill,
  alignBottom
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    EducacionComponent,
    ExperienciaComponent,
    PortafolioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
