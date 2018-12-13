import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeEditComponent } from './referee-edit.component';

describe('RefereeEditComponent', () => {
  let component: RefereeEditComponent;
  let fixture: ComponentFixture<RefereeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
