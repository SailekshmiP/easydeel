import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-pincodes',
  templateUrl: './add-pincodes.component.html',
  styleUrls: ['./add-pincodes.component.css']
})
export class AddPincodesComponent implements OnInit {

  locationFormRegistration:FormGroup;
  submitted = false;
  
  location;
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder,private easydealservice:EasydealService, private router:Router,private taostr:ToastrService) { }

  ngOnInit() {
    this.locationFormRegistration = this.formbuilder.group(
      {
        location: ['', Validators.required],
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.locationFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.locationFormRegistration.invalid) {
        return;
    }
    else{

      let req={
        "location":this.location,
        "state":"Active"
      }
      this.easydealservice.addlocation(req).subscribe(
        data =>
        {
        this.router.navigate(['/pincodes']);
        this.taostr.success("location added successfully");
        },

        error =>{
          this.taostr.error("location added unsuccessful");

        }
      )
    }
  }
}