import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewUserLocationRedeempointComponent } from './edit-new-user-location-redeempoint.component';

describe('EditNewUserLocationRedeempointComponent', () => {
  let component: EditNewUserLocationRedeempointComponent;
  let fixture: ComponentFixture<EditNewUserLocationRedeempointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewUserLocationRedeempointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewUserLocationRedeempointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
