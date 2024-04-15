import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalProducts: any;
  @Input() nextPage: any;
  @Input() previousPage: any;
  totalPages = 0; // Calculated by how much items are there, divided by, how many items will be displayed per page

  constructor() { }


  ngOnInit(): void {
    // if (this.totalItems) {
    //   this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    // }
    console.log("productCount-child:", this.totalProducts);
    console.log("next-child:", this.nextPage);
    console.log("previous-child:", this.previousPage);

  }

}
