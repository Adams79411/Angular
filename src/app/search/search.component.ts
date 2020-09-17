import { Component, OnInit } from '@angular/core';
import { LibraryserviceService } from '../libraryservice.service';
import { Book } from '../book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  bookArray:Book[];

  options = [
    {
        id: "0",
        value: 'Author'
    },
    {
        id: "1",
        value: 'publisher'
    },{
      id: "2",
      value: 'Book Name'
  },{
    id: "3",
    value: 'Book Category'
}];

  selectedId:Number;
  errorCondition:boolean;
  constructor(private _libraryService:LibraryserviceService) { }

  ngOnInit(): void {
  }

  changeId(event) {
    this.selectedId=event.target.id;
    this.errorCondition=false;
  }

  valuechange(event) {
    if(this.selectedId){
    this.errorCondition=false;
    this._libraryService.search(this.selectedId,event.target.value).subscribe(book=>{
      this.bookArray=book;
    })
    } else{
      this.errorCondition=true;
    }
  }
}
