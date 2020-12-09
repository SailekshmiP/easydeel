import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-general-category',
  templateUrl: './edit-general-category.component.html',
  styleUrls: ['./edit-general-category.component.css']
})
export class EditGeneralCategoryComponent implements OnInit {
  categorytypeFormRegistration: FormGroup;
  submitted = false;

  ctype;
  generalcategory;

  constructor(private formbuilder: FormBuilder, private router: Router, private easydeelservice: EasydealService, private toaster: ToastrService) { }


  ngOnInit() {
    this.generalcategory = JSON.parse(sessionStorage.getItem("Generalcategory"));

    this.categorytypeFormRegistration = this.formbuilder.group(
      {

        ctype: ['', Validators.required],
      })
    this.ctype = this.generalcategory["category_name"];
  }
  get f() { return this.categorytypeFormRegistration.controls; }

  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.categorytypeFormRegistration.invalid) {
      return;
    }
    else {
      // let s:String;
      // s = this.ctype;
      // console.log();
      let req = {
        "category_name": this.ctype.toUpperCase(),
      }
      this.easydeelservice.editgencat(req, this.generalcategory["_id"]).subscribe(
        data => {
          this.toaster.success("General category updated successfully");
          this.router.navigate(['/generalcategory'])
        },
        error => {
          this.toaster.error("General category updated unsuccessful");
        }
      )
    }
  }
}