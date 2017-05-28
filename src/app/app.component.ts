import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';
  submitted = false;
  data = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    console.log(this.signupForm);

    this.submitted = true;
    this.data.email = this.signupForm.value.userData.email;
    this.data.subscription = this.signupForm.value.userData.subscription;
    this.data.password = this.signupForm.value.userData.password;

    this.signupForm.reset();
  }
}
