import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGIconComponent } from './svg-icon.component';

describe('SVGIconComponent', () => {
  let component: SVGIconComponent;
  let fixture: ComponentFixture<SVGIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SVGIconComponent]
    });
    fixture = TestBed.createComponent(SVGIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
