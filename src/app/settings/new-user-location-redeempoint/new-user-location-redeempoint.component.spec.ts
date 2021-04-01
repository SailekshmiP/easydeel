import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserLocationRedeempointComponent } from './new-user-location-redeempoint.component';

describe('NewUserLocationRedeempointComponent', () => {
  let component: NewUserLocationRedeempointComponent;
  let fixture: ComponentFixture<NewUserLocationRedeempointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserLocationRedeempointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserLocationRedeempointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
