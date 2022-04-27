import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { User } from '../main/main.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  user:User;
  detailsElement:any;

  constructor(private route:ActivatedRoute,
    private userService:UsersService) { 
      this.id=0;
      this.user=null as any as User ;
    }
    
  ngOnInit(): void {
    this.detailsElement=document.getElementById('details');
    this.route.params.subscribe( params=>{
      this.id=params['id'];
      this.userService.getUser(this.id).subscribe((value:any)=>{
        this.user=value;
        this.assignData(this.detailsElement,this.user);
      });
    });
  }
  assignData(div:HTMLDivElement,object:any,depth=0){
    div.style.marginLeft='10px';
    for (const member in object) {
      let value=object[member];
      if(member=='__v')
        continue;
      div.innerText+='\n';
      div.innerHTML+=(this.multiply('&nbsp;&nbsp;',depth+1))
      div.innerText+=member+':';
      if(typeof(value)!=typeof('')&&typeof(value)!=typeof(2)&&typeof(value)!=typeof(true))
        this.assignData(div,object[member],depth+1);
      else
        div.innerText+=' '+value;
    }
  }
  multiply(str:string,times:number):string{
    if(times<1)
      return '';
    return str+this.multiply(str,times-1);
  }

}
