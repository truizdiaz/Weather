import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'api.openweathermap.org/data/2.5/weather?&appid=';
  key = '353e035c1f2cb617bb52a234fd18f7f8';
  constructor() { }

  getClima(ciudad: string) {

  }
}
