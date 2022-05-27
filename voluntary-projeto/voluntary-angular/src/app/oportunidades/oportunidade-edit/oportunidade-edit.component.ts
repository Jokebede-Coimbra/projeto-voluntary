import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Oportunidade } from '../model/oportunidade';
import { OportunidadeService } from '../services/oportunidade.service';

@Component({
  selector: 'app-oportunidade-edit',
  templateUrl: './oportunidade-edit.component.html',
  styleUrls: ['./oportunidade-edit.component.scss']
})
export class OportunidadeEditComponent implements OnInit {

  oportunidade: Oportunidade = null as any;

  constructor(
    private oportunidadeService: OportunidadeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router


  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.oportunidadeService.detail(id).subscribe(
      data => {
        this.oportunidade = data;
      },
      err => {
        this.toastr.error(err.error.mensagem, 'Falhou', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/'])
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.oportunidadeService.update(id, this.oportunidade).subscribe(
      data => {
        this.toastr.success('Oportunidade atualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/oportunidade'])
      },
      err => {
        this.toastr.error(err.error.mensagem, 'Falhou', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/'])
      }
    );
  }

}
