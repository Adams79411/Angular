import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListpageComponent } from './listpage/listpage.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LibraryserviceService } from './libraryservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListpageComponent,
    AddbookComponent,
    AdduserComponent,
    UserdetailsComponent,
    EdituserComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LibraryserviceService],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule, LoginComponent, ListpageComponent]
})
export class AppModule { }
