import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-refresher';



  script: string = "<li *ngFor = " + "let pData of personList" + ">{{ pData }}</li>";

}
