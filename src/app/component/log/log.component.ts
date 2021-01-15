import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
logs:Log[];
selectedlog:Log;
loaded:boolean = false

  constructor(private logservise:LogService) { }

  ngOnInit() {
    this.logservise.selectedSatate.subscribe(clear=>{
      if(clear){
        this.selectedlog={id:'',text:'',date:''}
      }
    })
   this.logservise.getlog().subscribe(logs=>{
     this.logs=logs;
     this.loaded = true;
   });
  }
  removelog(log:Log){
    if(confirm('Are you sure?')){
    this.logservise.deleteLog(log);
    }
  }
  selectlog(log:Log){
    this.logservise.setFormLog(log);
    this.selectedlog=log;
    
  }

}
