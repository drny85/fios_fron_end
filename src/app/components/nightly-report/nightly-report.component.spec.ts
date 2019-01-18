import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightlyReportComponent } from './nightly-report.component';

describe('NightlyReportComponent', () => {
  let component: NightlyReportComponent;
  let fixture: ComponentFixture<NightlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
