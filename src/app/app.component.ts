import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  users = [
    { names: 'Gopi', age: '28', gender: 'm' },
    { names: 'bharath', age: '30', gender: 'm' },
    { names: 'sasha', age: '35', gender: 'f' },
    { names: 'riya', age: '40', gender: 'f' },
    { names: 'ram', age: '50', gender: 'm' },
    { names: 'rama', age: '60' },
  ];
}
