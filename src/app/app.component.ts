import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expand(){
    document.getElementById('dropdown-btn').classList.toggle('tap');
  }
  title = 'foodee';
}
