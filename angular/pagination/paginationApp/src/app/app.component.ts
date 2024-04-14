import { Component, OnInit } from '@angular/core';
import { tableData } from './tableData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'paginationApp';
  data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = tableData;
  }

}
