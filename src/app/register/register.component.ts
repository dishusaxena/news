import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { Subscription } from 'rxjs';
import { ServicehttpService } from '../servicehttp.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(/* private r: Router, private httpser: ServicehttpService, private http:HttpClient */) { }

  /* x:User;
  a:Subscription;
  b;

  submit(a:string, b:string, c:string)
  {
    this.x = new User(a,b,c);
    this.b = this.httpser.crUser(this.x);
    this.a = this.b.subscribe( (data) => {
    console.log(data); 
    },
    (err) => {
    console.log(err);
    },
    () => {
      console.log("Completed");
    });
    //this.navcrt.navigateRoot('/login');
  	this.r.navigate(['/login']);
  }
 */
  ngOnInit() {
  }

}
