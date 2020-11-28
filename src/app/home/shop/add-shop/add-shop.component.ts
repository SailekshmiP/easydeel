import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
  shopform:FormGroup;
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
      "day": "Alapuzha",
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
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.shopform = this.fb.group({
      check:['',Validators.required],
      checkeddays: this.fb.array([]),
    })
  }
  onChange(time: string, isChecked: boolean) {
    this.sessiondayssRepat = [];
    const emailFormArray = <FormArray>this.shopform.controls.checkeddays;
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
}
