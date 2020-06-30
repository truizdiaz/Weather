import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImage = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  city = '';
  temperature: string;
  humedity: string;
  wheader: string;
  
  query = false;
  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

  getWheater() {
    this.climaService.getClima(this.city).subscribe(data => {
      console.log(data);
      this.query = true;
    });
  }

}
