import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadeEditComponent } from './oportunidade-edit.component';

describe('OportunidadeEditComponent', () => {
  let component: OportunidadeEditComponent;
  let fixture: ComponentFixture<OportunidadeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunidadeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunidadeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
