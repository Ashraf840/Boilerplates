import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  blogId: number = 0;
  blogDetail: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      // debugger;
      this.blogId = res.pk; // aligned to required params defined in the path of app-routing.module.ts
      this.getBlog(this.blogId);
    });
  }

  getBlog(id: number) {
    this.http.get(`http://127.0.0.1:8080/blog/api/${id}/`).subscribe((res: any) => {
      this.blogDetail = res;
    });
  }

}
