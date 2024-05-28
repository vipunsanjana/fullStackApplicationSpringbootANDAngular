import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent implements OnInit {

  postCustomerForm!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  postCustomer(): void {
    if (this.postCustomerForm.valid) {
      console.log(this.postCustomerForm.value);
      this.customerService.postCustomer(this.postCustomerForm.value).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('Customer added successfully!');
          this.router.navigateByUrl("/");
        },
        (err) => {
          console.error(err);
          this.toastr.error('Failed to add customer.');
        }
      );
    } else {
      this.toastr.warning('Please fill out the form correctly.');
    }
  }

  getCustomer(): void {
    this.router.navigateByUrl("/");
  }
}
