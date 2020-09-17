import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LibraryserviceService } from '../libraryservice.service';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.css']
})
export class ListpageComponent implements OnInit {

  bookArray:Book[];
  condition:boolean;
  errorCondition:boolean;
  bookId:String;

  constructor(private _libraryService:LibraryserviceService,
    private route: ActivatedRoute,
    private router: Router  ) { }

  ngOnInit(): void {
    this._libraryService.getBookData().subscribe(book=>{
      this.bookArray = book;
    });
  }

  onEditClick(event) {

  }
  
  onDelete(event) {
    this._libraryService.deletBookData(event.target.id).subscribe(data=>{
      if(data) {
        this.condition=true;
        this.errorCondition=false;
        this.bookId = event.target.id;
        this._libraryService.getBookData().subscribe(book=>{
          this.bookArray = book;
        });
      }else{
        this.condition=false;
        this.errorCondition=true;
      }
    });
  }
}
