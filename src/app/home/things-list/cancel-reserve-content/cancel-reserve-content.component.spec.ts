import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelReserveContentComponent } from './cancel-reserve-content.component';

describe('CancelReserveContentComponent', () => {
  let component: CancelReserveContentComponent;
  let fixture: ComponentFixture<CancelReserveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelReserveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelReserveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
