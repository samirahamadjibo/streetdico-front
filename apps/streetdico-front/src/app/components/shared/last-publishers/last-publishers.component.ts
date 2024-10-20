import { Component, OnInit} from '@angular/core';
import { WordService } from '../../../services/word/word.service';
import { tap, finalize } from 'rxjs';

@Component({
  selector: 'digitalvitae-last-publishers',
  templateUrl: './last-publishers.component.html',
  styleUrls: ['./last-publishers.component.scss'],
})
  export class LastPublishersComponent implements OnInit{
    constructor(private wordService: WordService){}
    
    public publishersNameList = [""]
    public isNameLoading = true;
    public skeletonNames = [""]

    setSkeletonNames(){
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.skeletonNames.push("")
      this.publishersNameList = this.skeletonNames
    }
   

    getPublishersNameList(){
      this.wordService.getPublishersNameList().pipe(
        tap(() => {
          this.isNameLoading = false; 
        }),
        finalize(() => {
          this.isNameLoading = false;
        })
      ).subscribe((names: any[]) => {
        this.publishersNameList = []
        names.forEach((name: any) => {
          this.publishersNameList.push(name.pseudo);
        });
        this.publishersNameList.reverse()
      }); 
    }

    ngOnInit(): void {
        this.setSkeletonNames()
        this.getPublishersNameList()        
    }
}
