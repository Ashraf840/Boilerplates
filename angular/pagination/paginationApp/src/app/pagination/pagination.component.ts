import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalProducts: any;
  @Input() nextPage: any;
  @Input() previousPage: any;
  @Input() limitPerPage: number = 0;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  totalPages = 0; // Calculated by how much items are there, divided by, how many items will be displayed per page
  pages: number[] = [];
  currentPageNumber: number = 1;
  nextPageNumber: number = 0;
  previousPageNumber: number = 0;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nextPage'] || changes['previousPage']) {
      this.calculateTotalPages();
      this.calculate_Current_Next_PageNumber();
      this.calculatePreviousPageNumber();
      // console.log('this.currentPageNumber:', this.currentPageNumber);
      // console.log('this.nextPageNumber:', this.nextPageNumber);
      // console.log('this.previousPageNumber:', this.previousPageNumber);
    }
  }

  calculateTotalPages() {
    if (this.totalProducts) {
      this.totalPages = Math.ceil(this.totalProducts / this.limitPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, x) => x + 1);
    }
  }

  calculate_Current_Next_PageNumber() {
    // Get the currentPageNumber by calculating the nextPage value
    if (this.nextPage !== null) {
      const match = this.nextPage.match(/page=(\d+)/);
      const nextPageNumber = match ? match[1] : null;
      this.nextPageNumber = nextPageNumber;
      if (nextPageNumber > 1 && nextPageNumber <= this.totalPages) {
        if (this.previousPage !== null) {
          this.currentPageNumber = nextPageNumber - 1
        }
      }
    } else {
      this.currentPageNumber = this.totalPages
      this.nextPageNumber = 0;
    }
  }

  calculatePreviousPageNumber() {
    if (this.previousPage !== null) {
      const match = this.previousPage.match(/page=(\d+)/);
      const previousPageNumber = match ? match[1] : null;
      this.previousPageNumber = previousPageNumber;
      // console.log("this.this.previousPageNumber-not null:", this.previousPageNumber);
    } else {
      this.currentPageNumber = 1;
      this.previousPageNumber = 0;
      // console.log("this.this.previousPageNumber-null:", this.previousPageNumber);
    }
  }

  ngOnInit(): void {
    this.calculateTotalPages();
    this.calculate_Current_Next_PageNumber();
    this.calculatePreviousPageNumber();
  }

  isCurrentPage(page: number): boolean {
    // console.log("passed param (page):", page);

    return page === this.currentPageNumber;
  }

  pageChangeEvent(
    pageNum: number = 0,
  ) {
    // console.log('go to a specific page:', pageNum);
    if (pageNum !== 0) {
      if (pageNum === null) {
        this.onClick.emit(1);
      } else {
        this.onClick.emit(pageNum);
      }
    }
  }

}
