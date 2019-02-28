import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { UpdateUser } from './UpdateUser';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ss:ServicehttpService) { }
  

  /* ardetails = this.ss.senddetailss();
  name = this.ardetails.firstname;
  email = this.ardetails.email; 
 
 psubmit(p){
   {this.ss.resetpassword(this.email,p);
 
   }
 } */

 update(name,email,password){
   let data = new UpdateUser(name.value,email.value,password.value);
   this.ss.updateUser(data);
 }
 
   ngOnInit() {
   }
 }


