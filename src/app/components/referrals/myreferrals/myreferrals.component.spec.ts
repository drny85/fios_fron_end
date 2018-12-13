import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreferralsComponent } from './myreferrals.component';

describe('MyreferralsComponent', () => {
  let component: MyreferralsComponent;
  let fixture: ComponentFixture<MyreferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreferralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
