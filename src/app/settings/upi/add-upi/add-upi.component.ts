import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-upi',
  templateUrl: './add-upi.component.html',
  styleUrls: ['./add-upi.component.css']
})
export class AddUpiComponent implements OnInit {
  addupicredentialsFormRegistration: FormGroup;
  submitted = false;

  location ="";
  upi;
  
  disable = false;
  disabled = false;
  results :any=[];
  
  constructor(private formbuilder: FormBuilder,private toaster:ToastrService,
    private easydeelservices:EasydealService,private router:Router) { }

  ngOnInit() {
    this. addupicredentialsFormRegistration= this.formbuilder.group(
    {
      location: ['', Validators.required],
      upi: ['', Validators.required],
      
      
    })

    this.getalllocations();
  }
    submit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.addupicredentialsFormRegistration.invalid) {
        return;
      }
      else {
        let req = {
          "location":this.location,
          "upi":this.upi
        }
        this.easydeelservices.addupinumber(req).subscribe(
          data =>{
            this.toaster.success("Upi number added succesfully");
            this.router.navigate(['/upi']);
          },
          error =>{
            this.toaster.error("Already a number added in same location");
          }
        )
      }
    }
    getalllocations(){
      this.easydeelservices.getalllocations().subscribe(
        data =>{
          console.log(data);
          this.results=data;
          
        },
        error =>{
          console.log(error);
          
        }
      )
    }
}