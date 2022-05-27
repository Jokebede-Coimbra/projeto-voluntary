import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Oportunidade } from '../model/oportunidade';
import { OportunidadeService } from '../services/oportunidade.service';


@Component({
  selector: 'app-ong-form',
  templateUrl: './ong-form.component.html',
  styleUrls: ['./ong-form.component.scss']
})
export class OngFormComponent implements OnInit {

  nome = "";
  associacao = "";
  descricao = "";
  endereco = "";

  constructor(
    private oportunidadeService: OportunidadeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onCreate(): void {
    const oportunidade = new Oportunidade(this.nome, this.associacao, this.descricao, this.endereco);
    this.oportunidadeService.save(oportunidade).subscribe(
      data => {
        this.toastr.success('Oportunidade criada', 'OK', {
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
}
