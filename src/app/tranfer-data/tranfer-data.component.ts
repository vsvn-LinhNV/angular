import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tranfer-data',
  templateUrl: './tranfer-data.component.html',
  styleUrls: ['./tranfer-data.component.css']
})
export class TranferDataComponent implements OnInit {
  constructor() { }
  @Input() tongSL:number =0;
  @Input() tongTienGH:number =0;
  ngOnInit(): void { }
}
