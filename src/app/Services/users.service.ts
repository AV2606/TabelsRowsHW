import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) {
   }
   getUsers(){
     return this.httpClient.get('https://fakestoreapi.com/users');
   }
   getUser(id: number){
     return this.httpClient.get('https://fakestoreapi.com/users/'+id);
   }
}
