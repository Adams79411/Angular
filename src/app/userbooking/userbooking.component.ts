import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryserviceService } from '../libraryservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.css']
})
export class UserbookingComponent implements OnInit {

  errorCondition: boolean;
  books:Book[];
  bookId: Number;

  constructor(private _libraryService:LibraryserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this._libraryService.getBookData().subscribe(book=>{
      this.books = book;
    });
  }

  optionChange(event) {
    this.bookId = event.target.value;
  }

  takeBook(event) {
    this._libraryService.takeBook(this.bookId).subscribe(book=>{
      if(book){
        this.errorCondition=true;
      }else{
        this.router.navigate(['/list']);
        this.errorCondition=false;
      }
    })
  }
}
