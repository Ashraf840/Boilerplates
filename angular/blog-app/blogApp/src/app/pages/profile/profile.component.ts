import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  authorUsername: string = '';
  authorDetail: any;

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });

    this.activatedRoute.params.subscribe((res: any) => {
      this.authorUsername = res.username;
    });

    this.getAuthorDetail(this.authorUsername);
  }

  getAuthorDetail(username: string) {
    this.http.get(`http://127.0.0.1:8080/user/api/author/${username}/`).subscribe((res: any) => {
      this.authorDetail = res;
    });
  }

}
