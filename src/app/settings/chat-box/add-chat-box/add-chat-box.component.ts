import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-chat-box',
  templateUrl: './add-chat-box.component.html',
  styleUrls: ['./add-chat-box.component.css']
})
export class AddChatBoxComponent implements OnInit {
  addchatboxFormRegistration:FormGroup;
  submitted = false;
  
  location;
  message;
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.addchatboxFormRegistration = this.formbuilder.group(
      {
        location: ['', Validators.required],
        message: ['', Validators.required],
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.addchatboxFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addchatboxFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}