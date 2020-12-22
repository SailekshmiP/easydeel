import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shop-credentials',
  templateUrl: './add-shop-credentials.component.html',
  styleUrls: ['./add-shop-credentials.component.css']
})
export class AddShopCredentialsComponent implements OnInit {
  addshopcredentialsFormRegistration: FormGroup;
  submitted = false;

  sname ="";
  emailusername;
  password;
  disable = false;
  disabled = false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this. addshopcredentialsFormRegistration= this.formbuilder.group(
    {
      sname: ['', Validators.required],
      emailusername: ['', Validators.required],
      password: ['', Validators.required],
    
      
    })
  }
    submit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.addshopcredentialsFormRegistration.invalid) {
        return;
      }
      else {
  
      }
    }

}