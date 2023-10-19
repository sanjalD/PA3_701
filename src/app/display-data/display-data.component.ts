import { Component } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {

  integerData: number = 42; // Example integer data
  stringData: string = 'Hello, Angular!'; // Example string data
  dateData: Date = new Date(); // Example date data
  arrayData: string[] = ['Item 1', 'Item 2', 'Item 3']; // Example array data
  selectedCombo: string = 'textbox'; // Example initial value for the combo
  textboxValue: string = ''; // Initial value for textbox
  textareaValue: string = ''; // Initial value for textarea
}
