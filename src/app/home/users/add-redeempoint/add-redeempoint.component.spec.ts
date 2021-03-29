import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRedeempointComponent } from './add-redeempoint.component';

describe('AddRedeempointComponent', () => {
  let component: AddRedeempointComponent;
  let fixture: ComponentFixture<AddRedeempointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRedeempointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRedeempointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
