import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-new-user-location-redeempoint',
  templateUrl: './edit-new-user-location-redeempoint.component.html',
  styleUrls: ['./edit-new-user-location-redeempoint.component.css']
})
export class EditNewUserLocationRedeempointComponent implements OnInit {
  addnewuserlocationreddempointformregistration: FormGroup;
  submitted = false;

  location;
  ramount;
  isLoading = false;
  button = 'Submit';
  results: any = [];
  locations: any = [];
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  redeemdetails:any = [];
  redeemeditid;
  constructor(private formbuilder: FormBuilder, private easydealservices: EasydealService, private router: Router,
     private toastr: ToastrService) { }


  ngOnInit() {
    this.addnewuserlocationreddempointformregistration = this.formbuilder.group(
      {
        location: ['', Validators.required],
        ramount: ['', Validators.required],

        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
      })
    this.getalllocations();
    this.redeemdetails = JSON.parse(sessionStorage.getItem("redeemamount"));
    this.location = this.redeemdetails['locationId']._id;
    this.ramount = this.redeemdetails['point'];
    this.redeemeditid =this.redeemdetails['_id'];
  }

  getalllocations() {
    this.easydealservices.getalllocations().subscribe(
      data => {
        console.log(data);
        let results: any = [];
        this.locations = data;


      },
      error => {
        console.log(error);

      }
    )
  }
  get f() { return this.addnewuserlocationreddempointformregistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';


    // stop here if form is invalid
    if (this.addnewuserlocationreddempointformregistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      let req = {
        "locationid": this.location,
        "point":this.ramount


      }

      this.easydealservices.updateredeemamount(req,this.redeemeditid).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.router.navigate(['/newuserlocationredeempoint'])
          this.toastr.success("Location redeem new user updated successfully");

        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';

        }
      )

    }
  }
}
