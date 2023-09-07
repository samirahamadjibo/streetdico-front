import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digitalvitae-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  title = "Hello"
  
  ngOnInit(): void {
    this.title = "Hello Samira"
  }

}
