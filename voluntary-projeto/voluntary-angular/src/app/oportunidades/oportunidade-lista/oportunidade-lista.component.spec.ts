import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadeListaComponent } from './oportunidade-lista.component';

describe('OportunidadeListaComponent', () => {
  let component: OportunidadeListaComponent;
  let fixture: ComponentFixture<OportunidadeListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunidadeListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunidadeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
