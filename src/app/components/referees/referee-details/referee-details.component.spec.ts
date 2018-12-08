import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeDetailsComponent } from './referee-details.component';

describe('RefereeDetailsComponent', () => {
  let component: RefereeDetailsComponent;
  let fixture: ComponentFixture<RefereeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
