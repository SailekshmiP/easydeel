import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
  // shopform:FormGroup;
  sessiondayssRepat
  repeatsessiondays = [
    {
      "id": "6",
      "day": "Kochi",

    },

    {
      "id": "0",
      "day": "Haripad",
    },
    {
      "id": "1",
      "day": "Alappuzha",
    },
    {
      "id": "2",
      "day": "Kollam",
    },
    {
      "id": "3",
      "day": "Karthikappally",
    },

  ]
  value;

  shopFormRegistration: FormGroup;
  submitted = false;

  sname;
  scat;
  saddress;
  sln;
  sphn;
  sotime;
  sctime;
  movalue;
  sdperc;
  pucharge;
  dcharge;
  check;
  checkeddays;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.shopFormRegistration = this.fb.group({
      sname: ['', Validators.required],
      scat: ['', Validators.required],
      saddress: ['', Validators.required],
      sln: ['', Validators.required],
      sphn: ['', Validators.required],
      sotime: ['', Validators.required],
      sctime: ['', Validators.required],
      movalue: ['', Validators.required],
      sdperc: ['', Validators.required],
      pucharge: ['', Validators.required],
      dcharge: ['', Validators.required],
      check: ['', Validators.required],
      checkeddays: this.fb.array([]),
    })


  }
  onChange(time: string, isChecked: boolean) {
    this.sessiondayssRepat = [];
    const emailFormArray = <FormArray>this.shopFormRegistration.controls.checkeddays;
    if (isChecked) {
      emailFormArray.push(new FormControl(time));
      this.value = emailFormArray['value']
      //console.log(this.value)

      for (let j = 0; j < this.value.length; j++) {
        this.sessiondayssRepat.push(this.value[j]);

      }
      console.log(this.sessiondayssRepat)

    }

    else {
      let index = emailFormArray.controls.findIndex(x => x.value == time)
      emailFormArray.removeAt(index);
    }


    // console.log(emailFormArray)
  }
  get f() { return this.shopFormRegistration.controls; }

  submit() {
    this.submitted = true;
    if (this.shopFormRegistration.invalid) {
      return;
    }
    else {

    }
  }
}
