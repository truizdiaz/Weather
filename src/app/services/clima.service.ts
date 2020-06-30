import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'http://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '353e035c1f2cb617bb52a234fd18f7f8';
  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    return this.http.get(this.url + this.key + '&q=' + ciudad);
  }
}
