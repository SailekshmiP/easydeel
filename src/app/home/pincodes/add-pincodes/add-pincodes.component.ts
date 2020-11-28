import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pincodes',
  templateUrl: './add-pincodes.component.html',
  styleUrls: ['./add-pincodes.component.css']
})
export class AddPincodesComponent implements OnInit {

  pincodeFormRegistration:FormGroup;
  submitted = false;
  
 pincode;
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.pincodeFormRegistration = this.formbuilder.group(
      {
        pincode: ['', Validators.required],
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.pincodeFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.pincodeFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}