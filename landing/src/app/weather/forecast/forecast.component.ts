import { Component } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { AsyncPipe, DatePipe, DecimalPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [NgFor, DecimalPipe, DatePipe, AsyncPipe],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {
  forecast$: Observable<{ dateString: string, temp: number }[]>;

  constructor(forecastService: ForecastService) {
    this.forecast$ = forecastService.getForecast();
  }

}
