import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Addnews } from './addnews/Addnews';
import { UpdateUser } from './update/UpdateUser';


@Injectable({
  providedIn: 'root'
})
export class ServicehttpService {

  private isUserLoggedIn;
  public username;

  constructor(private http:HttpClient, private r:Router){
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
    this.username = 'admin';
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  public aruser;
  urating(){
    return this.http.get('http://localhost:3000/rating');
  
  }
  
  setuser(req){

    this.aruser=req;
    console.log(this.aruser);
   this.r.navigate(['/dashboard']);
  
  }
  
  returnuser(){
    console.log(this.aruser);
    return this.aruser;
  }
  /* ardetails;
senddetails(i){
  this.ardetails = this.aruser[i];
}
senddetailss(){
  return this.ardetails;
}

resetpassword(e,p){
  console.log(e,p);
  this.http.post('http://localhost:3000/reset_pass',{"email":e,"password":p}).subscribe((res)=> { console.log("done");
  });

} */

d:UpdateUser;
updateUser(d){
  console.log(d);
  this.http.post('http://localhost:3000/reset_pass',d).subscribe((res)=>{
    console.log('User updated')
  });
}

NewNews(j:Addnews)
  {
    console.log(j);
  	return this.http.post("http://localhost:3000/AddNews", j);
  }

updates(i){
  console.log(i.tab);
  this.http.post('http://localhost:3000/update_sequence',{'seq':i.seq, 'tab':i.tab}).subscribe((res)=>{console.log("done");
});
}

delete(i){
  console.log(i);
  i.tab='';
  this.http.post('http://localhost:3000/update_sequ',{'seq':i.seq, 'tab':i.tab}).subscribe((res)=>{console.log("done");
});
}

sequen(){
  return this.http.get('http://localhost:3000/tab_sequence');
}

anews;
setseq(h){
  this.anews=h;
  console.log(this.anews);
}

sendseq(){
  console.log(this.anews);
  return this.anews;
}
  
  
  
}
