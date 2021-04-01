import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserLocationRedeempointComponent } from './add-new-user-location-redeempoint.component';

describe('AddNewUserLocationRedeempointComponent', () => {
  let component: AddNewUserLocationRedeempointComponent;
  let fixture: ComponentFixture<AddNewUserLocationRedeempointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewUserLocationRedeempointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUserLocationRedeempointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
