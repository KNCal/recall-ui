import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerProductRecallComponent } from './consumer-product-recall.component';

describe('ConsumerProductRecallComponent', () => {
  let component: ConsumerProductRecallComponent;
  let fixture: ComponentFixture<ConsumerProductRecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerProductRecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerProductRecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
