import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HotelsResults } from '../../interfaces/hotels';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  constructor(private http: HttpClient) {}

  getHotel(): Observable<HotelsResults> {
    return this.http.get<HotelsResults>('http://localhost:3000/0');
  }
}
