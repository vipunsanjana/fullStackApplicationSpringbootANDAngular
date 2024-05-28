import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrls: ['./get-all-customer.component.css'] // Corrected "styleUrl" to "styleUrls"
})
export class GetAllCustomerComponent implements OnInit {

  customers: any = [];

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService // Inject ToastrService
  ) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAllCustomer().subscribe((res) => {
      console.log(res);
      this.customers = res;
    });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe((res) => {
      console.log(res);
      this.toastr.success('Customer deleted successfully!'); // Show success toast message
      this.getAllCustomers(); // Refresh the list of customers
    }, (err) => {
      console.error(err);
      this.toastr.error('Failed to delete customer.'); // Show error toast message if delete fails
    });
  }

}
