import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lorem } from 'faker';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(eventTarget: EventTarget) {
    this.enteredText = (eventTarget as HTMLInputElement).value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
