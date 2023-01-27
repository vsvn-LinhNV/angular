import { Component,OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tranfer-data-child2-parent',
  templateUrl: './tranfer-data-child2-parent.component.html',
  styleUrls: ['./tranfer-data-child2-parent.component.css']
})


export class TranferDataChild2ParentComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @Output() capnhatGH = new EventEmitter();
  capnhat() {
    var d = [ 600, 800];
    this.capnhatGH.emit(d);
  }

  @Output() onDatePicked = new EventEmitter<any>();
  public pickDate(date: any): void {
    this.onDatePicked.emit(date);
  }

  @Output() dathangEvent = new EventEmitter<any>();

  yeucaudathang() {
    this.dathangEvent.emit(10000000);
  }


  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }




}
