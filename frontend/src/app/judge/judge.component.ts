import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.css']
})
export class JudgeComponent implements OnInit {

  constructor() { }

  public submitPayout(payout) {
    console.log(payout + "payout judged!")
  }

  ngOnInit() {
  }

}
