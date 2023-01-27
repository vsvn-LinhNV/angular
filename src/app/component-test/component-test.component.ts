import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent implements OnInit {
  bind_title = 'Xin chao';
  public name: string = 'ahihi'; // dữ liệu muốn hiển thị sang view (file html)

  constructor() {}

  ngOnInit(): void {}
}
