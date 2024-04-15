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
  @Input() limitPerPage: number = 0;
  totalPages = 0; // Calculated by how much items are there, divided by, how many items will be displayed per page
  pages: number[] = [];

  constructor() { }


  ngOnInit(): void {
    if (this.totalProducts) {
      this.totalPages = Math.ceil(this.totalProducts / this.limitPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, x) => x + 1);
    }
    console.log("productCount-child:", this.totalProducts);
    console.log("next-child:", this.nextPage);
    console.log("previous-child:", this.previousPage);
    console.log("limitPerPage-child:", this.limitPerPage);
    console.log("totalPages-child:", this.totalPages);

  }

}
