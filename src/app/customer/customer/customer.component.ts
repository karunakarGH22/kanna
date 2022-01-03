import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICustomer } from '../customer-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer = {} as ICustomer;
  customers = [] as ICustomer[];
  custFormGroup: FormGroup;
  submitted = false;



  constructor() { 
    this.custFormGroup = new FormGroup({
      custNumber: new FormControl(null, Validators.required),
      custName: new FormControl(null,Validators.required),
      custAmount: new FormControl(null,Validators.required),

    }

    )

  }

  ngOnInit(): void {
  }
      get f() {
        return this.custFormGroup.controls;
      }
     
  AddCustomer(FormGroup: FormGroup) {
    if (FormGroup.invalid) {
      this.submitted=true;
      return;
    }
      this.customer = FormGroup.value;
      this.customers.push(this.customer);
      alert("Customer Added");
      FormGroup.reset();

  }

}
