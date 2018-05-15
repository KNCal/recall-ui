import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecallComponent } from './food-recall.component';

describe('FoodRecallComponent', () => {
  let component: FoodRecallComponent;
  let fixture: ComponentFixture<FoodRecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodRecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
