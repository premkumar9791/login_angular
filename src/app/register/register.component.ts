import { Component,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendServiceService } from '../backend-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 

  userform!: FormGroup;

  constructor(private fb: FormBuilder, private userdata: BackendServiceService) {}

  ngOnInit(): void {
    this.userform = this.fb.group({
      Name: ["", [Validators.required]],
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required, Validators.minLength(8)]],
      Password2: ["", [Validators.required, Validators.minLength(8)]],
      isagree: false
    });
  }
  
  onSubmit(): void {
    if (this.userform.valid) {
      const user = {
        Name: this.userform.get('Name')?.value,
        Email: this.userform.get('Email')?.value,
        Password: this.userform.get('Password')?.value
      };
      
       
       document.getElementById('successMessage')?.classList.remove('d-none');
    
      this.userdata.save(user)
        .subscribe(
          response => {
            console.log(response);
            this.userform.reset();
           
          },
          error => {
            console.log('Error:', error);
          }
        );
    }
  }

 
}
