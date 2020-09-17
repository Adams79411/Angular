import { Component, OnInit } from '@angular/core';
import { LibraryserviceService } from '../libraryservice.service';
import { Observable,Subject } from "rxjs";
import { User } from '../user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userArray:User[];
  condition:boolean;
  errorCondition:boolean;
  userId:String;

  constructor(private _libraryService:LibraryserviceService,
    private route: ActivatedRoute,
    private router: Router  ) { }

  ngOnInit(): void {
    this._libraryService.getData().subscribe(user=>{
      this.userArray = user;
    });
  }

  onDelete(event) {
    this._libraryService.deleteData(event.target.id).subscribe(data=>{
      if(data) {
        this.condition=true;
        this.errorCondition=false;
        this.userId = event.target.id;
        this._libraryService.getData().subscribe(user=>{
          this.userArray = user;
        });
      }else{
        this.condition=false;
        this.errorCondition=true;
      }
    });
  }

  onClickEdit(event) {
    this.router.navigate(['/editUser', { id: event.target.id }]);
  }
}
