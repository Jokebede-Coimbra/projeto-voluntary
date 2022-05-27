import { Oportunidade } from './../model/oportunidade';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OportunidadeService } from '../services/oportunidade.service';

@Component({
  selector: 'app-oportunidade-lista',
  templateUrl: './oportunidade-lista.component.html',
  styleUrls: ['./oportunidade-lista.component.scss']
})
export class OportunidadeListaComponent implements OnInit {

  filtroList = '';
  oportunidades: Oportunidade[] = [];

  constructor(
    private oportunidadeService: OportunidadeService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.carregarOportunidades();
  }

  carregarOportunidades(): void {
    this.oportunidadeService.list().subscribe(
      data => {
        this.oportunidades = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  deletar(id?: any) {
    this.oportunidadeService.delete(id).subscribe(
      data => {
        this.toastr.success('Oportunidade deletada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.carregarOportunidades();
      },
      err => {
        this.toastr.error(err.error.mensagem, 'Falhou', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    )
  }

}
