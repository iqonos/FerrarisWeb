import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeslizarProductoComponent } from './deslizar-producto.component';

describe('DeslizarProductoComponent', () => {
  let component: DeslizarProductoComponent;
  let fixture: ComponentFixture<DeslizarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeslizarProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeslizarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
