import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-coursetype',
  templateUrl: './add-coursetype.component.html',
  styleUrls: ['./add-coursetype.component.css']
})
export class AddCoursetypeComponent implements OnInit {
  coursetypeFormRegistration:FormGroup;
  submitted = false;
  
  ctype ;
 
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.coursetypeFormRegistration = this.formbuilder.group(
      {
        
       ctype:['', Validators.required],
        
    })

  }
get f() { return this.coursetypeFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.coursetypeFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}