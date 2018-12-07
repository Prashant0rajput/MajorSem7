import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetLocDetailsService {

  constructor( private http: HttpClient ) {
    this.http.get('https://api.github.com/users')
      .subscribe(data => console.log(data));

  }


  getLocation(){
    this.http.get('http://localhost:3000/getLocation' , {responseType: 'text'})
      .subscribe(data => console.log(data));

  }
}

