import { VoluntarioListaComponent } from './oportunidades/voluntario-lista/voluntario-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngFormComponent } from './oportunidades/ong-form/ong-form.component';
import { OportunidadeCadastroComponent } from './oportunidades/oportunidade-cadastro/oportunidade-cadastro.component';
import { OportunidadeDetailComponent } from './oportunidades/oportunidade-detalhe/oportunidade-detail.component';
import { OportunidadeEditComponent } from './oportunidades/oportunidade-edit/oportunidade-edit.component';
import { OportunidadeListaComponent } from './oportunidades/oportunidade-lista/oportunidade-lista.component';
import { VoluntarioFormComponent } from './oportunidades/voluntario-form/voluntario-form.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FiltroOportunidadePipe } from './shared/pipes/filtro-oportunidade.pipe';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    VoluntarioFormComponent,
    VoluntarioListaComponent,
    OportunidadeDetailComponent,
    OportunidadeEditComponent,
    OportunidadeListaComponent,
    OportunidadeCadastroComponent,
    FiltroOportunidadePipe,
    OngFormComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
