import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloServiciosComponent } from './articulo-servicios.component';

describe('ArticuloServiciosComponent', () => {
  let component: ArticuloServiciosComponent;
  let fixture: ComponentFixture<ArticuloServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
