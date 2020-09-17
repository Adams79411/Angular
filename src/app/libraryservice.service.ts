import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { User} from './user';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class LibraryserviceService {

  private api = "http://localhost:8080";
  private deleteEndPoint = "http://localhost:8080/deleteData/";
  private deleteBookEndPoint = "http://localhost:8080/deleteBookData/";
  private getEndPoint = "http://localhost:8080/getSpecificUserData/";
  private fileUploadEndPoint = "http://localhost:8080/fileUpload/";

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.api+ '/users/');
  }

  deleteData(userId: String): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.deleteEndPoint+userId);
  }

  deletBookData(bookId: String): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.deleteBookEndPoint+bookId);
  }

  getSpecificUserData(userId: String): Observable<User> {
    return this.httpClient.get<User>(this.getEndPoint+userId);
  }

  updateUserData(user: User): Observable<boolean> {
    return this.httpClient.post<boolean>(this.api+ '/updateUser/',user);
  }

  saveUserData(user: User): Observable<boolean> {
    return this.httpClient.post<boolean>(this.api+ '/saveUser/',user);
  }

  saveBookDetails(book: Book): Observable<Number> {
    return this.httpClient.post<Number>(this.api+ '/saveBookDetails/',book);
  }

  getBookData(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.api+ '/books/');
  }

  uploadFile( file: File , id : Number ) : Observable<boolean>  {  
    let url = this.fileUploadEndPoint+ id ;  
    const formdata: FormData = new FormData();  
    formdata.append('file', file);  
    return this.httpClient.post<boolean>(url , formdata);  
  }  

  search(criteria:Number,search:String): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.api+ '/search/'+criteria+"/"+search);
  }

  takeBook(bookId: Number): Observable<boolean> {
    return this.httpClient.get<boolean>(this.api+ '/takeBook/'+bookId);
  }
}
