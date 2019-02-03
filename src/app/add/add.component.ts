import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private ss:ServicehttpService) { }

  ngOnInit() {
  }

  /* anews=this.ss.sendseq();
flag;
asubmit(t,s){
  this.flag=!this.flag;
  console.log(t,s);
  this.anews.push({"tab":t, "seq":s});
  console.log(this.anews);
  this.flag=!this.flag;
}

del(i,j){
  this.flag=!this.flag;

  this.ss.delete(i);
  this.anews.splice(j,1);

  
  this.flag=!this.flag;
}

update(i){
  this.flag=!this.flag;
  console.log(i);
  this.ss.updates(i);
  this.flag=!this.flag;
}
 */
}
