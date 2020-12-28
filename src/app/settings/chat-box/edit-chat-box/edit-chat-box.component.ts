import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-chat-box',
  templateUrl: './edit-chat-box.component.html',
  styleUrls: ['./edit-chat-box.component.css']
})
export class EditChatBoxComponent implements OnInit {
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