import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreferralsComponent } from './allreferrals.component';

describe('AllreferralsComponent', () => {
  let component: AllreferralsComponent;
  let fixture: ComponentFixture<AllreferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllreferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
