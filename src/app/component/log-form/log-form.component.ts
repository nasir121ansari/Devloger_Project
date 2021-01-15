import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import {LogService} from '../../services/log.service';



@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
id:string;
text:string;
date:any;
isNew:boolean=true;

constructor(private logservise:LogService) { }

  ngOnInit() {

    this.logservise.selectedLog.subscribe(log=>{
      console.log(log);
      if(log.id !== null){
        this.isNew=false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    })
  }
onSubmit(){
  if(this.isNew){
    console.log("new");
    const newLog ={
      id:this.uuid(),
      text:this.text,
      date:new Date()
    }
    this.logservise.addLog(newLog);  
    }else{
      console.log("update");
      const updateLog={
        id:this.id,
        text:this.text,
        date:new Date()
      }
      this.logservise.updateLog(updateLog);
    }
    this.clearlog();
  }
 uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

clearlog(){
  this.isNew=true;
  this.id= '';
  this.text='';
  this.date='';
  this.logservise.clearState();
}
  
}
