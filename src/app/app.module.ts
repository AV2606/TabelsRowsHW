import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './Components/main/main.component';
import { Router, RouterModule } from '@angular/router';
import { UserComponent } from './Components/user/user.component';

export const paths=[
  {path:'',component:MainComponent},
  {path:'user/:id',component:UserComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
