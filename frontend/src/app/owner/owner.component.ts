import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  contract: Contract = {
    id: 3,
    deposit: 100,
    rent: 10
  };
  returned: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
