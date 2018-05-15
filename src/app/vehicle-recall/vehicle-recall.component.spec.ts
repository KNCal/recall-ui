import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRecallComponent } from './vehicle-recall.component';

describe('VehicleRecallComponent', () => {
  let component: VehicleRecallComponent;
  let fixture: ComponentFixture<VehicleRecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleRecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
