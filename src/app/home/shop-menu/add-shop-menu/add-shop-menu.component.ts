import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shop-menu',
  templateUrl: './add-shop-menu.component.html',
  styleUrls: ['./add-shop-menu.component.css']
})
export class AddShopMenuComponent implements OnInit {
  shopmenuFormRegistration:FormGroup;
  submitted = false;
  
  sname;
  location;
  mname;  
  mdes;
  prate;
  srate;
  dperc;
  damount;
  patime;
  pctime;
  mimages;
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.shopmenuFormRegistration = this.formbuilder.group(
      {
        sname: ['', Validators.required],
        location:['', Validators.required],
        mname:['', Validators.required],
        mdes:['', Validators.required],
        prate:['', Validators.required],
        srate:['', Validators.required],
        dperc:['', Validators.required],
        damount:['', Validators.required],
        patime:['', Validators.required],
        pctime:['', Validators.required],
        mimages:['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.shopmenuFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.shopmenuFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}
