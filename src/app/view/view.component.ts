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
  aruser;
  ngOnInit() {
    this.aruser = this.p.returnuser();
     }

}
