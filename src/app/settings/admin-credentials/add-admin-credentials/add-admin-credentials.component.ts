import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-admin-credentials',
  templateUrl: './add-admin-credentials.component.html',
  styleUrls: ['./add-admin-credentials.component.css']
})
export class AddAdminCredentialsComponent implements OnInit {
  addadmincredentialsFormRegistration: FormGroup;
  submitted = false;

  
  emailusername;
  password;
  location ="";
  disable = false;
  disabled = false;
  isLoading = false;
  button = 'Submit';
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this. addadmincredentialsFormRegistration= this.formbuilder.group(
    {
      
      emailusername: ['', Validators.required],
      password: ['', Validators.required],
      location: ['', Validators.required],
      
    })
  }
    submit() {
     
        this.submitted = true;
        this.isLoading = true;
        this.button = 'Processing';
  
      // stop here if form is invalid
      if (this.addadmincredentialsFormRegistration.invalid) {
      
          this.isLoading = false;
          this.button = 'submit';
          return;
        }
        else {
          
          this.isLoading = true;
          this.button = 'Processing';
      }
     
    }

}