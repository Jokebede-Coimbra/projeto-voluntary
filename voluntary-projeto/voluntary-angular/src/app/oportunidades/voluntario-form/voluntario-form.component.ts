import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { Oportunidade } from '../model/oportunidade';
import { VoluntarioForm } from '../model/voluntario-form';
import { OportunidadeService } from '../services/oportunidade.service';
import { VoluntarioService } from './../services/voluntario.service';

@Component({
  selector: 'app-voluntario-form',
  templateUrl: './voluntario-form.component.html',
  styleUrls: ['./voluntario-form.component.scss']
})
export class VoluntarioFormComponent implements OnInit {

  nome = "";
  email = "";
  cpf = "";
  telefone = "";

  oportunidades!: Observable<Oportunidade[]>;

  constructor(
    private voluntarioService: VoluntarioService,
    private oportunidadeService: OportunidadeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarOportunidades();

  }

  onCreate(): void {
    const voluntarioForm = new VoluntarioForm(this.nome, this.email, this.cpf, this.telefone);
    this.voluntarioService.save(voluntarioForm).subscribe(
      data => {
        this.toastr.success('Cadastro criado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/oportunidade']);
      },
      err => {
        this.toastr.error(err.error.mensagem, 'Falhou', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/oportunidade'])
      }
    );
  }

  carregarOportunidades(): void {
    this.oportunidades = this.oportunidadeService.list();
  }
}
