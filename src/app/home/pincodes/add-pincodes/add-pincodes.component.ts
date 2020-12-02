import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pincodes',
  templateUrl: './add-pincodes.component.html',
  styleUrls: ['./add-pincodes.component.css']
})
export class AddPincodesComponent implements OnInit {

  locationFormRegistration:FormGroup;
  submitted = false;
  
  location;
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.locationFormRegistration = this.formbuilder.group(
      {
        location: ['', Validators.required],
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.locationFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.locationFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}