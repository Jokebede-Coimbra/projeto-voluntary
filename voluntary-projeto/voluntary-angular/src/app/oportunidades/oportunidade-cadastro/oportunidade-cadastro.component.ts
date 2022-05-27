import { Oportunidade } from './../model/oportunidade';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OportunidadeService } from '../services/oportunidade.service';

@Component({
  selector: 'app-oportunidade-cadastro',
  templateUrl: './oportunidade-cadastro.component.html',
  styleUrls: ['./oportunidade-cadastro.component.scss']
})
export class OportunidadeCadastroComponent implements OnInit {

  nome = "";
  associacao = "";
  descricao = "";
  endereco = "";

  constructor(
    private oportunidadeService: OportunidadeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const oportunidade = new Oportunidade(this.nome, this.associacao, this.descricao, this.endereco);
    this.oportunidadeService.save(oportunidade).subscribe(
      data => {
        this.toastr.success('Oportunidade Criada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
