import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-walletpoints',
  templateUrl: './walletpoints.component.html',
  styleUrls: ['./walletpoints.component.css']
})
export class WalletpointsComponent implements OnInit {

  walletpointsFormRegistration:FormGroup;
  submitted = false;
  
  rpoints;
  avalue;
  ramount;
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.walletpointsFormRegistration = this.formbuilder.group(
      {
        rpoints: ['', Validators.required],
        avalue: ['', Validators.required],
        ramount: ['', Validators.required],
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.walletpointsFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.walletpointsFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}