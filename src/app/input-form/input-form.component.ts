import { Component } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  user = {
    name: '',
    // Add other user details here
  };

  submitForm() {
    // Handle form submission here, e.g., send data to a service
    console.log(this.user);
  }
}
