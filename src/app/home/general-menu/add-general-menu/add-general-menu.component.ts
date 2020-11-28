import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-general-menu',
  templateUrl: './add-general-menu.component.html',
  styleUrls: ['./add-general-menu.component.css']
})
export class AddGeneralMenuComponent implements OnInit {
  generalmenuFormRegistration:FormGroup;
  submitted = false;
  
  cname;
  iname;
  des;  
  iimage;
  // mctype="";
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }
  ngOnInit() {
    this.generalmenuFormRegistration= this.formbuilder.group(
      {
        cname: ['', Validators.required],
        iname:['', Validators.required],
        des:['', Validators.required],
        iimage:['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.generalmenuFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.generalmenuFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}