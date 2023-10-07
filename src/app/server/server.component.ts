import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverName: string = 'DarkSide';
  serverID: number = 7;

  getServerStatus(): string {
    return "Offline"
  }

}
