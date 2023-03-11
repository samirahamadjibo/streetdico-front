import "../../../../../../node_modules/@types/gapi/index.d.ts"

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digitalvitae-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  ngOnInit(): void {console.log("User componnet init")}
}
