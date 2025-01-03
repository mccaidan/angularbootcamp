import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PhotoShowComponent } from "./photo-show/photo-show.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, PhotoShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photos';
}
