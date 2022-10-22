import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }
  public userArr: any = [
    {"firstname": "John", "lastname": "Doe", "email": "john@example.com"},
    {"firstname": "subhra", "lastname": "pradhan", "email": "subhra@example.com"},
    {"firstname": "July", "lastname": "Dooley", "email": "july@example.com"},
    {"firstname": "test", "lastname": "testlast", "email": "test@example.com"}
  ]

  getUserList() {
    return this.userArr;
  }
}
