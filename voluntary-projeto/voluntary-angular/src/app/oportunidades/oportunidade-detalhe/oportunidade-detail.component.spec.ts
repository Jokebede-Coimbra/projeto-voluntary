import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadeDetailComponent } from './oportunidade-detail.component';

describe('OportunidadeDetailComponent', () => {
  let component: OportunidadeDetailComponent;
  let fixture: ComponentFixture<OportunidadeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunidadeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunidadeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
