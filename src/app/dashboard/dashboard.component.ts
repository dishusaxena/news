import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserData } from '../view/UserData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private p:ServicehttpService, private r:Router) { }

  /* aruser = this.p.returnuser();
  length= this.aruser.length; */

  userdata: UserData[];
  totaluser;
  s: Subscription;
  u; 


  ngOnInit() {
     this.u = this.p.data;
    this.s = this.u.subscribe(( data1)=>{
      console.log(data1);
      this.userdata=data1;
      
    },
    (err) =>{
      console.log(err);
    },
    () => {
      console.log("completed");
    }
    );
 
  }

}
