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
  currentPageNumber: number = 1;

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

    // Get the currentPageNumber by calculating the nextPage value
    if (this.nextPage !== null) {
      const match = this.nextPage.match(/page=(\d+)/);
      const nextPageNumber = match ? match[1] : null;
      console.log('nextPageNumber', nextPageNumber);
      if (nextPageNumber > 1 && nextPageNumber <= this.totalPages) {
        this.currentPageNumber = nextPageNumber - 1
        console.log('currentPageNumber:', this.currentPageNumber);
        console.log('typeof(currentPageNumber):', typeof (this.currentPageNumber));
      }
    } else {
      this.currentPageNumber = this.totalPages - 1
      console.log('currentPageNumber:', this.currentPageNumber);
      console.log('typeof(currentPageNumber):', typeof (this.currentPageNumber));
    }

    console.log("pages-child:", typeof (this.pages[0]));

    // Calculating the current page by tracking down the next-page-number fetched from the api
    // CASE-1: nextPageNumber>1 && nextPageNumber<=this.totalPages :: currentPageNumber = nextPageNumber-1
    // CASE-2: nextPageNumber===null :: currentPageNumber = totalPages-1

  }

  isCurrentPage(page: number): boolean {
    console.log("passed param (page):", page);

    return page === this.currentPageNumber;
  }

}
