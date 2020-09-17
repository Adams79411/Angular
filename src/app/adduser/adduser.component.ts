import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LibraryserviceService } from '../libraryservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  userId: String;
  model = new User('','',false);
  options = [
    {
        id: "0",
        value: 'Admin'
    },
    {
        id: "1",
        value: 'Normal User'
    }];
    condition:boolean;
    changed:boolean;

  constructor(private route: ActivatedRoute,private router: Router,
    private _libraryService:LibraryserviceService) { }

  ngOnInit(): void {
  }

  valuechange(event) {
    this.changed=true;
  }
  
  save() {
    if(!this.changed){
      this.condition=true;
    }else{
      this._libraryService.saveUserData(this.model).subscribe(user=>{
        if(user){
          this.condition=false;
          this.router.navigate(['/viewUser']);
        }
      });
    }
  }

}
