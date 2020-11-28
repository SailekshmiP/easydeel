import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-general-shop-menu',
  templateUrl: './add-general-shop-menu.component.html',
  styleUrls: ['./add-general-shop-menu.component.css']
})
export class AddGeneralShopMenuComponent implements OnInit {
  generalshopmenuFormRegistration:FormGroup;
  submitted = false;
  
  iquant;
  iprice;
  israte;
  imrp;
  idamount;
  idpercent;


  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.generalshopmenuFormRegistration = this.formbuilder.group(
      {
        iquant: ['', Validators.required],
        iprice:['', Validators.required],
        israte:['', Validators.required],
        imrp:['', Validators.required],
        idamount:['', Validators.required],
        idpercent:['', Validators.required],
    })

  }
get f() { return this.generalshopmenuFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.generalshopmenuFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}