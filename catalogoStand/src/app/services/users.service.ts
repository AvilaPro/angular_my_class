import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUser(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      console.log(data);
      return data;
    })
  }

  createUser(name: String, job: String){
    let registro = { 'name': name, 'job': job };
    this.httpClient.post('https://reqres.in/api/users', registro).subscribe((data) => {
      console.log(data);
      return data;
    })
  }

  updateUser(user: User){
    this.httpClient.put('https://reqres.in/api/users/2', user).subscribe((data) => {
      console.log(data);
      return data;
    })
  }

  deleteUser(id: number){
    this.httpClient.delete(`https://reqres.in/api/users/${id}`).subscribe((data) => {
      console.log(data);
      return data;
    })
  }

}
