import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-delivery-boys',
  templateUrl: './add-delivery-boys.component.html',
  styleUrls: ['./add-delivery-boys.component.css']
})
export class AddDeliveryBoysComponent implements OnInit {
  deliveryboyFormRegistration:FormGroup;
  submitted = false;
  
  dname;
  uname;
  address; 
  mobile;
  aadhar;
  password;
  isLoading = false;
  button = 'Submit';

  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.deliveryboyFormRegistration= this.formbuilder.group(
      {
        dname: ['', Validators.required],
        uname:['', Validators.required],
        address:['', Validators.required],
        mobile:['', Validators.required],
        aadhar:['', Validators.required],
        password:['', Validators.required],
      
    })

  }
get f() { return this.deliveryboyFormRegistration.controls; }

  submit(){
    
  this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.deliveryboyFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}