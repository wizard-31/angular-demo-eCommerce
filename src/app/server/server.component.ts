import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: yellow;
    }
  `]
})

export class ServerComponent {
  serverName: string = 'DarkSide';
  serverID: number = 7;
  serverStatus: string = 'Offline';
  userName: string = 'Assignment 2 - Default userName';
  isUserNameEmpty: boolean = false

  getServerStatus(): string {
    return this.serverStatus
  }

  onUserNameUpdate() {
    this.userName = '';
    this.isUserNameEmpty = true
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';

  }
  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

}
