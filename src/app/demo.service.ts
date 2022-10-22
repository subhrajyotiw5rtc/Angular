import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }
  public userArr: any = [];

  getUserList(): Observable<any> {
    return this.http.get('assets/users.json').pipe(
      
    );
  }
}
