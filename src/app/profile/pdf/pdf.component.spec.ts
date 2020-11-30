import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFComponent } from './pdf.component';

describe('IntroComponent', () => {
  let component: PDFComponent;
  let fixture: ComponentFixture<PDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
