import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListpageComponent } from './listpage/listpage.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EdituserComponent } from './edituser/edituser.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{path: 'list',component: ListpageComponent},
{path: 'addBook',component: AddbookComponent},
{path: 'addUser',component: AdduserComponent},
{path: 'viewUser',component: UserdetailsComponent},
{path: 'editUser',component: EdituserComponent},
{path: 'search',component: SearchComponent},
{ path: '',   redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
