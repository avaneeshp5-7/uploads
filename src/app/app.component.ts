import { Component ,OnInit} from '@angular/core';

import {Http} from '@angular/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'MsrTask';
  constructor(){}
  ngOnInit()
  {
   
  }
  funUpload()
  {
    var files = <HTMLFormElement>document.getElementById("frm");
    files.submit()
  }
}
