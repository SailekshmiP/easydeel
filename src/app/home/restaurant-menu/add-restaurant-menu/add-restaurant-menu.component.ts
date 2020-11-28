import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant-menu',
  templateUrl: './add-restaurant-menu.component.html',
  styleUrls: ['./add-restaurant-menu.component.css']
})
export class AddRestaurantMenuComponent implements OnInit {

  restaurantmenuFormRegistration:FormGroup;
  submitted = false;
  
  mname;
  mdes;
  mtype;  
  ctype;
  mimages;
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.restaurantmenuFormRegistration = this.formbuilder.group(
      {
        mname: ['', Validators.required],
        mdes:['', Validators.required],
        mtype:['', Validators.required],
        ctype:['', Validators.required],
        mimages:['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.restaurantmenuFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.restaurantmenuFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}
