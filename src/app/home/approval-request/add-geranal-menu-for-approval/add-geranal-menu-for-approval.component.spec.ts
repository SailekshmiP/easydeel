import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeranalMenuForApprovalComponent } from './add-geranal-menu-for-approval.component';

describe('AddGeranalMenuForApprovalComponent', () => {
  let component: AddGeranalMenuForApprovalComponent;
  let fixture: ComponentFixture<AddGeranalMenuForApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeranalMenuForApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeranalMenuForApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
