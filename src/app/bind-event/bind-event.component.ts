import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-bind-event',
  templateUrl: './bind-event.component.html',
  styleUrls: ['./bind-event.component.css']
})
export class BindEventComponent implements OnInit {
  public title: string = 'Event Binding';

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(event:any) {
      // code để xử lý sự kiện khi người dùng click vào button
      console.log(event.target.innerText)
  }
}
