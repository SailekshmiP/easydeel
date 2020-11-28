import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-masteradminphonenumber',
  templateUrl: './masteradminphonenumber.component.html',
  styleUrls: ['./masteradminphonenumber.component.css']
})
export class MasteradminphonenumberComponent implements OnInit {
  masteradminphonenumberFormRegistration:FormGroup;
  submitted = false;
  
  aname;
  aphn;
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.masteradminphonenumberFormRegistration = this.formbuilder.group(
      {
        aname: ['', Validators.required],
        aphn: ['', Validators.required],
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.masteradminphonenumberFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.masteradminphonenumberFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}