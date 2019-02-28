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

  aruser = this.p.returnuser(); 



  ngOnInit() {
    

  }

}
