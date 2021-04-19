import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnalertComponent } from './warnalert.component';

describe('WarnalertComponent', () => {
  let component: WarnalertComponent;
  let fixture: ComponentFixture<WarnalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarnalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
