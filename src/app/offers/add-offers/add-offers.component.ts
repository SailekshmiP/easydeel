import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.css']
})
export class AddOffersComponent implements OnInit {

  offerFormRegistration:FormGroup;
  submitted = false;
  
  mname;
  oloc;
  odes;  
  tqpurc;
  tnusers;
  oprice;
  aprice;
  adata;
  atime;
  ctime;
  bimages;
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.offerFormRegistration = this.formbuilder.group(
      {
        mname: [''],
        oloc:['', Validators.required],
        odes:['', Validators.required],
        tqpurc: ['', Validators.required],
        tnusers: ['', Validators.required],
        oprice: ['', Validators.required],
        aprice: ['', Validators.required],
        adata: ['', Validators.required],
        atime: ['', Validators.required],
        ctime: ['', Validators.required],
        bimages: ['', Validators.required],
    })

  }
get f() { return this.offerFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.offerFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}
