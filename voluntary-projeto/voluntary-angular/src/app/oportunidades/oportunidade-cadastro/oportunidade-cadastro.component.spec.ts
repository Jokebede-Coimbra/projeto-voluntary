import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadeCadastroComponent } from './oportunidade-cadastro.component';

describe('OportunidadeCadastroComponent', () => {
  let component: OportunidadeCadastroComponent;
  let fixture: ComponentFixture<OportunidadeCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunidadeCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunidadeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
