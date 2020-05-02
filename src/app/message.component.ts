import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-info',
  templateUrl: './message.component.html',
  styleUrls : ['./custom.css']
})

export class MessageComponent {

  @Input() public message :string = 'init. message';

  @Input('alert-pop') public message1 :string = '123';

  public showAlert():void{
    alert(this.message1);
  }
}
export class MessageComponent2 {

  @Input() public message :string = 'init. message';

  @Input('alert-pop') public message1 :string= '123';

  public showAlert2():void{
    alert(this.message1);
  }
}
