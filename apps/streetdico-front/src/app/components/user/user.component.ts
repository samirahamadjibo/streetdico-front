import "../../../../../../node_modules/@types/gapi/index.d.ts"

import { Component, OnInit } from '@angular/core';
declare const gapi: any;

@Component({
  selector: 'digitalvitae-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  ngOnInit(): void {console.log("User componnet init")}

  onSignIn2(googleUser: any): void {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  onSignIn(googleUser: any): void {
    const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;
    console.log("id_token: " + id_token);
  }


  handleCredentialResponse(response: any): void{
    console.log("handle credential response" + response.credential)
  }

}
