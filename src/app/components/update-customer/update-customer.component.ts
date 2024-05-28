import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'] // Corrected "styleUrl" to "styleUrls"
})
export class UpdateCustomerComponent implements OnInit {

  id: number = this.actvatedRoute.snapshot.params["id"];
  updateCustomerForm!: FormGroup;

  constructor(
    private actvatedRoute: ActivatedRoute, 
    private service: CustomerService, 
    private fb: FormBuilder, 
    private router: Router,
    private toastr: ToastrService // Inject ToastrService
  ) { }

  ngOnInit() {
    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
    this.getCustomerById();
  }

  getCustomerById() {
    this.service.getCustomerById(this.id).subscribe((res) => {
      console.log(res);
      this.updateCustomerForm.patchValue(res);
    })
  }

  getCustomer(): void {
    this.router.navigateByUrl("/");
  }

  updateCustomer() {
    this.service.updateCustomer(this.id, this.updateCustomerForm.value).subscribe((res) => {
      console.log(res);
      if (res.id != null) {
        this.toastr.success('Customer updated successfully!');
        this.router.navigateByUrl("/");
      } else {
        this.toastr.error('Failed to update customer.');
      }
    }, (err) => {
      console.error(err);
      this.toastr.error('Failed to update customer.');
    });
  }
}
