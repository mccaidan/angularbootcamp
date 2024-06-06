import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherModule } from './weather/weather.module';
import { NotificationsModule } from './notifications/notifications.module';
import { NewsApiModule } from './news-api/news-api.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherModule, NotificationsModule, NewsApiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing';
}
