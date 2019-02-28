import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
anews=[];
bb;
bn:Subscription;
  constructor(private ss:ServicehttpService) { 
    this.bb=this.ss.sequen();
    this.bn=this.bb.subscribe((req)=>{
      this.ss.setseq(req);
      this.data();
    });
  }


  data(){
    this.anews=this.ss.sendseq();
  }
  ngOnInit() {
  }
  
  flag;
  asubmit(t,s){
    
    console.log(this.anews);
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
    this.ss.updateUser(i);
    this.flag=!this.flag;
  }

}
