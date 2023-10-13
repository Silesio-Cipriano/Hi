import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalInputComponent } from './normal-input.component';

describe('NormalInputComponent', () => {
  let component: NormalInputComponent;
  let fixture: ComponentFixture<NormalInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalInputComponent]
    });
    fixture = TestBed.createComponent(NormalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
