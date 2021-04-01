import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectCashComponentComponent } from './collect-cash-component.component';

describe('CollectCashComponentComponent', () => {
  let component: CollectCashComponentComponent;
  let fixture: ComponentFixture<CollectCashComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectCashComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectCashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
