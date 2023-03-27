import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBgWhiteComponent } from './section-bg-white.component';

describe('SectionBgWhiteComponent', () => {
  let component: SectionBgWhiteComponent;
  let fixture: ComponentFixture<SectionBgWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBgWhiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBgWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
