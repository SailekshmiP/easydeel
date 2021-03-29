import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMenuApprovalComponent } from './general-menu-approval.component';

describe('GeneralMenuApprovalComponent', () => {
  let component: GeneralMenuApprovalComponent;
  let fixture: ComponentFixture<GeneralMenuApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMenuApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMenuApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
