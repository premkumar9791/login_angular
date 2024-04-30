import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private backendService: BackendServiceService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      try {
        await this.backendService.login(email, password);
        console.log(email,password,"arun");
        
        window.location.href = 'https://sagitor-fitness-page-mxo8.vercel.app/home';

      } catch (error) {
        alert("Invalid");

      }
    }
  }
}
