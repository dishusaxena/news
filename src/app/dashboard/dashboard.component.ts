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

  constructor(private user:ServicehttpService, private r:Router) { }

  aruser = this.user.returnuser();   
    length = this.aruser.length;
  

 



  ngOnInit() {
   
    }

}
