import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaEmpresaComponent } from './la-empresa.component';

describe('LaEmpresaComponent', () => {
  let component: LaEmpresaComponent;
  let fixture: ComponentFixture<LaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
