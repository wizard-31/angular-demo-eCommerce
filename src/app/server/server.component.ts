import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverName: string = 'DarkSide';
  serverID: number = 7;
  userName: string = 'Assignment 2 - Default userName';
  isUserNameEmpty: boolean = false

  getServerStatus(): string {
    return "Offline"
  }

  onUserNameUpdate() {
    this.userName = '';
    this.isUserNameEmpty = true
  }


}
