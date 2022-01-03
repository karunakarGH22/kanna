import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstName = "sathesh";

  constructor() { }

  ngOnInit(): void {
  }

  public show() {
        alert("This is Button");
  }
}
