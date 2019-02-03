import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserData } from './UserData';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private p:ServicehttpService, private r:Router) { }

  //aruser;
  userdata: UserData[];
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

    //this.aruser = this.ss.returnuser();
  }

}
