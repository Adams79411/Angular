import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';
import { LibraryserviceService } from '../libraryservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

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
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    this._libraryService.getSpecificUserData(this.userId).subscribe(user=>{
      this.model=new User(this.userId,user.userName,user.isAdmin);
    });
  }

  valuechange(event) {
    this.changed=true;
  }
  
  update(event) {
    if(!this.changed){
      this.condition=true;
    }else{
      this.model.userId = event.target.id;
      this._libraryService.updateUserData(this.model).subscribe(user=>{
        if(user){
          this.condition=false;
          this.router.navigate(['/viewUser']);
        }
      });
    }
  }
}
