import { Component, OnInit } from '@angular/core';
import { Word } from 'apps/streetdico-front/src/app/models/word';
import { WordService } from 'apps/streetdico-front/src/app/services/word/word.service';



@Component({
  selector: 'digitalvitae-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit {
  ngOnInit(): void {
  }
}
