import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getComments(page) {
    return this.http.get(`${this.url}?page=${page}`);
  }

}
