import { Component } from "@angular/core";
import { TranslateService } from "./translate.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  text!: string;
  translatedText!: string;

  constructor(private translateService: TranslateService) {}

  submit() {
    this.translateService.translate(this.text).subscribe((result) => {
      this.translatedText = result;
    });
  }

  onInput (event: any) {
    this.text = event.target.value;
    console.log(this.text);
  }
}
