import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingCrudContentComponent } from './thing-crud-content.component';

describe('ThingCrudContentComponent', () => {
  let component: ThingCrudContentComponent;
  let fixture: ComponentFixture<ThingCrudContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingCrudContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingCrudContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
