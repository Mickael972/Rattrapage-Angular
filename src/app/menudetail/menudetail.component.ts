import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.component.html',
  styleUrls: ['./menudetail.component.css']
})
export class MenudetailComponent implements OnInit {
  @Input() menu: any;
  
    constructor() { }
  
    ngOnInit(): void {
    }

}
