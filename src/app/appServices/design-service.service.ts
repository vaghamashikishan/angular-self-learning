import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignServiceService {

  constructor(private http: HttpClient) { }

  messageShow() {
    alert('This is a message from automatic, fast and better service');
  }

  productShow(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
