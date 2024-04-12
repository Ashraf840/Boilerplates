import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogList: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.http.get("http://127.0.0.1:8080/blog/api/").subscribe((res: any) => {
      // debugger;
      this.blogList = res;
    });
  }

  openBlog(id: number) {
    this.router.navigate(['/blog', id]);
  }
}
