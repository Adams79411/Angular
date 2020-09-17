import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LibraryserviceService } from '../libraryservice.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  model = new Book(0,'','',0,'',0,'',0,'','','','',File);
  changed:boolean;
  condition:boolean;
  selectedFiles: FileList;
  bookId:Number;

  constructor(private route: ActivatedRoute,private router: Router,
    private _libraryService:LibraryserviceService) { }

  ngOnInit(): void {
  }

  valuechange(event) {
    this.changed=true;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  save() {
    if(!this.changed){
      this.condition=true;
    } else {
      this._libraryService.saveBookDetails(this.model).subscribe(book=>{
        if(book==0){
          this.condition=true;
        }else{
          this.condition=false;
          this.router.navigate(['/list']);
          this.bookId = book;
          if(this.selectedFiles){
          this._libraryService.uploadFile(this.selectedFiles.item(0),this.bookId).subscribe(file=>{
            this.condition=false;
          });
        }
      }
      })
    }
  }
}
