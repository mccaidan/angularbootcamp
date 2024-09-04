import { CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles!: number;

  onMilesChange(event: any) {
    this.miles = parseFloat(event.target.value);
  }

  onHeightChange(event: any) {
    this.height = parseFloat(event.target.value);
  }

  onNameChange(event: any) {
    this.name = event.target.value;
  }

  onDateChange(event: any) {
    this.date = event.target.value;
  }

  onAmountChange(event: any) {
    this.amount = parseFloat(event.target.value);
  }
}
