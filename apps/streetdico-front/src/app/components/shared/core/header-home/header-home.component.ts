import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'digitalvitae-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss'],
})
export class HeaderHomeComponent implements OnInit{
  ngOnInit(): void {
      console.log("header-home created")
  }
}
