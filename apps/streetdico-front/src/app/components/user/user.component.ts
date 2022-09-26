/// <reference path="../../../../../../node_modules/@types/gapi/index.d.ts" />

import { Component, OnInit } from '@angular/core';
declare const gapi: any;

@Component({
  selector: 'digitalvitae-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSignIn(googleUser: any): void {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  signOut(): void {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  }

  handleCredentialResponse(response: any): void{
    console.log("handle credential response" + response.credential)
  }

}
