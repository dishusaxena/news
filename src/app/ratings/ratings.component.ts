import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { Router } from '@angular/router';
import { UserData } from '../view/UserData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  constructor(private p:ServicehttpService, private router:Router) { }

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
