import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!';
  someData = 'initial value';
  isLoggedIn = false;
  names = ['Pat', 'Jo', 'Jackie'];
  someEventualValue = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(Date.now().toString(16));
    }, 7500);
  });

  constructor() {
    console.log('EV', this.someEventualValue);
  }

  onLogin() {
    console.log('got login click!');
  }

  listenOnly(data) {
    console.log('data', data);
  }
}
