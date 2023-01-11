import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class ChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  //socket = io('http://localhost:7070');

  public sendMessage(message: any) {
    //this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    //this.socket.on('message', (message: string) =>{
     // this.message$.next(message);
   // });
    
    //return this.message$.asObservable();
  };
}