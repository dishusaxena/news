import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Addnews } from './addnews/Addnews';


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

   NewNews(j:Addnews)
  {
  	return this.http.post("http://localhost:3000/AddNews", j);
  } 

  data= this.http.get("http://localhost:3000/userdata");

  aruser;
  ardetails;
  senddetails(i){ 
  this.ardetails = this.aruser[i];
  }
  senddetailss(){
    return this.ardetails;
  }
  returnuser(){
    console.log(this.aruser);
    return this.aruser;
  }
  
/*   aruser;
urating(){
  return this.http.get('http://localhost:3000/rating');
}

setuser(req){

  this.aruser=req;
  console.log(req);
 this.r.navigate(['/dashboard']);

}

returnuser(){
  console.log(this.aruser);
  return this.aruser;
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
  return this.anews;
}

updates(i){
console.log(i.tab);
this.http.post('http://localhost:3000/update_sequence',{'seq':i.seq, 'tab':i.tab}).subscribe((res)=> { console.log("done");

});
}

delete(i){
  console.log(i);
  i.tab='';
  this.http.post('http://localhost:3000/update_sequ',{'seq':i.seq, 'tab':i.tab}).subscribe((res)=> { console.log("done");

});
  
} */
  
}
