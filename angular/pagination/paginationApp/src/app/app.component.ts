import { Component, OnInit } from '@angular/core';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'paginationApp';
  data: any;
  productCount: number = 0;
  next: any;
  previous: any;
  // limitPerPage: number = 20;
  limitPerPage: number = 100; // just to simplify the pagination-nav-numbers

  constructor(private productDataService: ProductDataService) { }

  ngOnInit(page: number = 1): void {
    // this.data = tableData;
    this.productDataService.getPaginatedData(page).subscribe((res: any) => {
      // debugger;
      this.productCount = res.count;
      this.next = res.next;
      this.previous = res.previous;
      this.data = res.results;

      // console.log("productCount-parent:", this.productCount);
      // console.log("next-parent:", this.next);
      // console.log("previous-parent:", this.previous);

      // if (this.next === null) console.log("Next URL is null! Value:", this.next);
      // if (this.previous === null) console.log("Previous URL is null! Value:", this.previous);
    });
  }

  pageChangeEvent(
    pageNum: number = 0,
  ) {
    // console.log('go to a specific page-parent:', pageNum);
    this.ngOnInit(pageNum);
  }

}
