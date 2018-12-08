import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReferresComponent } from './all-referres.component';

describe('AllReferresComponent', () => {
  let component: AllReferresComponent;
  let fixture: ComponentFixture<AllReferresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReferresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReferresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
