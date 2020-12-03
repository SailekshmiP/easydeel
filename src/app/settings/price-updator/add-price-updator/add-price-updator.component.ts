import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-price-updator',
  templateUrl: './add-price-updator.component.html',
  styleUrls: ['./add-price-updator.component.css']
})
export class AddPriceUpdatorComponent implements OnInit {

  addpriceupdatorFormRegistration: FormGroup;
  submitted = false;

  sname ="";
  sprice ="";
  amount;
  percentage;
  disable = false;
  disabled = false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.addpriceupdatorFormRegistration = this.formbuilder.group(
      {
        sname: ['', Validators.required],
        sprice: ['', Validators.required],
        amount: ['', Validators.required],
        percentage: ['',Validators.required],
        
      })

  }
  get f() { return this.addpriceupdatorFormRegistration.controls; }

  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addpriceupdatorFormRegistration.invalid) {
      return;
    }
    else {

    }
  }

 onkeydown(amount) {
    this.disabled = true;
    if (amount == '') {
      this.disabled = false;
      this.addpriceupdatorFormRegistration.get('percentage').enable();

    }
    else {
      this.disabled = true;
      this.addpriceupdatorFormRegistration.get('percentage').disable();

    }
  }
  onkeydown1(percentage) {
    this.disable = true;
    if (percentage == '') {
      this.disable = false;
      this.addpriceupdatorFormRegistration.get('amount').enable();

    }
    else {
      this.disable = true;
      this.addpriceupdatorFormRegistration.get('amount').disable();

    }
  }
}