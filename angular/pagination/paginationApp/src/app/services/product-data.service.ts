import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  ProductCLUrl = `http://127.0.0.1:8080/api/`;

  constructor(private http: HttpClient) { }

  getPaginatedData(page: number = 1): Observable<any[]> {
    // return this.http.get<any[]>(`${this.ProductCLUrl}`);
    return this.http.get<any[]>(`${this.ProductCLUrl}?page=${page}`);
  }
}
