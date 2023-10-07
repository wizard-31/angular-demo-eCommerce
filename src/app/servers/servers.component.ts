import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers' #can be used when component is used as a class like in CSS
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No Server was created!';
  serverCount: number = 0;
  serverName: string = "";

constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
 }

ngOnInit(): void {
}

onCreateServer() {
  this.serverCreationStatus = "A new Server was just created!";
  this.serverCount++;
}
onServerNameUpdate(event:Event) {
  // console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
}

}
