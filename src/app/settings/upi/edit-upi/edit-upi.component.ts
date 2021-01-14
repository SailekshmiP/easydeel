import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-upi',
  templateUrl: './edit-upi.component.html',
  styleUrls: ['./edit-upi.component.css']
})
export class EditUpiComponent implements OnInit {
  editupicredentialsFormRegistration: FormGroup;
  submitted = false;

  location ="";
  upi; 
  disable = false;
  disabled = false;
  results :any=[];
  constructor(private formbuilder: FormBuilder,private easydeelservices:EasydealService,private router:Router) { }


  ngOnInit() {
    this. editupicredentialsFormRegistration= this.formbuilder.group(
    {
      location: ['', Validators.required],
      upi: ['', Validators.required],
      
      
    })
    this.getalllocations();

  }
    submit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.editupicredentialsFormRegistration.invalid) {
        return;
      }
      else {
  
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