import { Component, OnInit} from '@angular/core';
import { WordService } from '../../../services/word/word.service';

@Component({
  selector: 'digitalvitae-last-publishers',
  templateUrl: './last-publishers.component.html',
  styleUrls: ['./last-publishers.component.scss'],
})
  export class LastPublishersComponent implements OnInit{
    constructor(private wordService: WordService){}
    
    public publishersNameList = [""]

    getPublishersNameList(){
      this.publishersNameList = [];
      this.wordService.getPublishersNameList().subscribe((names: any) => {
        names.forEach((name: any) => {
          this.publishersNameList.push(name.pseudo);
        });
        this.publishersNameList.reverse()
      }); 
    }

    ngOnInit(): void {
        this.getPublishersNameList()        
    }
}
