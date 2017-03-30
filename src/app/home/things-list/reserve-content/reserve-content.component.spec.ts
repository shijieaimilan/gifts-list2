import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveContentComponent } from './reserve-content.component';

describe('ReserveContentComponent', () => {
  let component: ReserveContentComponent;
  let fixture: ComponentFixture<ReserveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
