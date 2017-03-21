import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!';
  someData = 'initial value';

  onLogin() {
    console.log('got login click!');
  }

  listenOnly(data) {
    console.log('data', data);
  }
}
