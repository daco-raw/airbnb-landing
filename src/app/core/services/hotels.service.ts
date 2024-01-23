import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HotelsService {
  private endPoint: string = `${environment.apiHotels}`;
  private hotels$: Observable<any>;

  constructor(private http: HttpClient) {
    this.hotels$ = this.getAllHotels();
  }

  public getAllHotels(): Observable<any> {
    return this.http.get<any>(this.endPoint);
  }
}
