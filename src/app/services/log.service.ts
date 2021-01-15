import { Injectable, ɵConsole } from '@angular/core';
import { Log } from '../models/Log';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import{of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogService {
private logSource = new BehaviorSubject<Log>({id:null,text:null,date:null});
selectedLog= this.logSource.asObservable();

private stateSource = new BehaviorSubject<boolean>(true);
selectedSatate= this.stateSource.asObservable();
logs:Log[];

  constructor() {  
    // this.logs=[
    //   {id:'1',text:'id component', date: new Date('02/22/2019 23:27:33')},
    //   {id:'2',text:'text component', date: new Date('10/11/2019 23:27:33')},
    //   {id:'3',text:'date component', date: new Date('08/01/2019 23:27:33')}
    //   ]
    this.logs=[];
  }
  getlog(): Observable<Log[]>{
    if(localStorage.getItem('logs===null')){
      this.logs = [];
        }else{
          this.logs = JSON.parse(localStorage.getItem('logs'));
        }
    return of(this.logs.sort((a,b)=>{
      return b.date  = a.date;
    }));
  }
  setFormLog(log:Log){
  this.logSource.next(log);
  }
  addLog(log:Log){
    console.log(log);
    this.logs.unshift(log);
    localStorage.setItem('logs',JSON.stringify(this.logs));
  }
  updateLog(log:Log){
    console.log(log);
    this.logs.forEach((curr,index)=>{
      if(log.id===curr.id){
        this.logs.splice(index,1);
      }
    })
    this.logs.unshift(log);
    localStorage.setItem('logs',JSON.stringify(this.logs));
  }
  deleteLog(log:Log){
    console.log(log);
    this.logs.forEach((curr,index)=>{
      if(log.id===curr.id){
        this.logs.splice(index,1);
      }
    })
    localStorage.setItem('logs',JSON.stringify(this.logs));
  }
  clearState(){
    this.stateSource.next(true);
  }
}
