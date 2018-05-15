import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugRecallComponent } from './drug-recall.component';

describe('DrugRecallComponent', () => {
  let component: DrugRecallComponent;
  let fixture: ComponentFixture<DrugRecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugRecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugRecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
