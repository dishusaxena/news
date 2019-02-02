import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicehttpService } from '../servicehttp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private r:Router, private user:ServicehttpService) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    //console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    //console.log(username,password);
    if(username == 'admin' && password == 'admin'){
      //alert("successfully log in!!");
      this.user.setUserLoggedIn();
      this.r.navigate(['dashboard']);
    }
    else{
      alert("please enter correct username and password");
    }
  }

}
