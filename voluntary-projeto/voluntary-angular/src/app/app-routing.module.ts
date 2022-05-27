import { VoluntarioListaComponent } from './oportunidades/voluntario-lista/voluntario-lista.component';
import { VoluntarioFormComponent } from './oportunidades/voluntario-form/voluntario-form.component';

import { HomeComponent } from './shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngFormComponent } from './oportunidades/ong-form/ong-form.component';
import { OportunidadeCadastroComponent } from './oportunidades/oportunidade-cadastro/oportunidade-cadastro.component';
import { OportunidadeDetailComponent } from './oportunidades/oportunidade-detalhe/oportunidade-detail.component';
import { OportunidadeEditComponent } from './oportunidades/oportunidade-edit/oportunidade-edit.component';
import { OportunidadeListaComponent } from './oportunidades/oportunidade-lista/oportunidade-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'oportunidade', component: OportunidadeListaComponent },
  { path: 'detalhe/:id', component: OportunidadeDetailComponent },
  { path: 'cadastro', component: OportunidadeCadastroComponent },
  { path: 'editar/:id', component: OportunidadeEditComponent },
  { path: 'ong', component: OngFormComponent },
  { path: 'voluntario', component: VoluntarioFormComponent },
  { path: 'list-voluntario', component: VoluntarioListaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
