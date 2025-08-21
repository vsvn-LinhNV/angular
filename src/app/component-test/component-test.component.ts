import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent implements OnInit {
  bind_title = 'Xin chao';
  public name: string = 'ahihi'; // dữ liệu muốn hiển th�? sang view (file html)
  public imgLink : string = "assets/images/avata.jpg";
  public tbBorder : number = 1;
  public tbWidth : number = 1;
  public isBorder : boolean = true;
  public isSpecial : boolean = true; // dữ liệu muốn hiển th�? sang view
  public size : number = 20; // dữ liệu muốn hiển th�? sang view
  user = {
    name: 'xyz',
    addr: 'LINH TEST'
  }
  constructor() {}

  ngOnInit(): void {}
}
