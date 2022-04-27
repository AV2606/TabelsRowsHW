import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/Services/users.service';

export interface User {
  address: {street:string, city:string,number:number};
  email: string;
  id: number;
  password: string;
  phone: string;
  username: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[]=null as any;

  constructor(private usersService:UsersService,
    private routerService:Router) {
    usersService.getUsers().subscribe((value:any)=>{
      this.users=value;
    });
   }

  ngOnInit(): void {
  }
  inspectUser(user:User){
    this.routerService.navigate(['user',user.id])
  }
}
