import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls : ['./custom.css']
})
export class AppComponent {
  public val: string = 'This is alert popup message from app.com.ts';

  public val2: string= 'This is message for message 2';
}
