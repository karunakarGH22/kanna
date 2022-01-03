import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from '../employee-model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee = {} as IEmployee;
  employees =[] as IEmployee[];
  submitted = false;

  constructor() {

    this.employee={empNumber: 101, empName : 'Sathesh',empSalary : 35000};

    this.employees = [
      // {empNumber:101, empName:'Sathesh', empSalary:4500},
      // {empNumber:102, empName: 'Ramesh',empSalary:55000},
      // {empNumber:103, empName: 'mohan', empSalary:85000},
      {empNumber:104, empName: 'kiran',empSalary:45000},

    ];
      
  
   }



  ngOnInit(): void {
  }

     AddEmployee(f: NgForm) {
     this.employees.push(this.employee);
     alert("Record Added"); 
     this.employee= {} as IEmployee;
     f.resetForm();
     }

}
