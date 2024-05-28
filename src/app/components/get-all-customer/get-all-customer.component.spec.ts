import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCustomerComponent } from './get-all-customer.component';

describe('GetAllCustomerComponent', () => {
  let component: GetAllCustomerComponent;
  let fixture: ComponentFixture<GetAllCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
