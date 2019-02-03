import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicehttpService } from '../servicehttp.service';
import { Subscription } from 'rxjs';
import { Addnews } from './Addnews';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  constructor(private r:Router, private httpser:ServicehttpService) { }

  a:Addnews;
  b;
  c:Subscription;

  crAndAdd( x:string, y:string, z:string, ab:string )
  {
    this.a = new Addnews(x,y,z,ab);
    this.b = this.httpser.NewNews(this.a);
    this.c = this.b.subscribe((data) => {
    console.log(data); 
    },
    (err) => {
    console.log(err);
    },
    () => {
      console.log("Completed");
    });
    //this.httpser.getTrend();
    this.r.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
