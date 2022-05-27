import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { VoluntarioService } from '../services/voluntario.service';
import { VoluntarioForm } from './../model/voluntario-form';

@Component({
  selector: 'app-voluntario-lista',
  templateUrl: './voluntario-lista.component.html',
  styleUrls: ['./voluntario-lista.component.scss']
})
export class VoluntarioListaComponent implements OnInit {

  voluntarios: VoluntarioForm[] = [];

  constructor(
    private voluntarioService: VoluntarioService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.carregarVoluntarios();
  }

  carregarVoluntarios(): void {
    this.voluntarioService.list().subscribe(
      data => {
        this.voluntarios = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
