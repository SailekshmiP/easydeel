import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-coursetype',
  templateUrl: './edit-coursetype.component.html',
  styleUrls: ['./edit-coursetype.component.css']
})
export class EditCoursetypeComponent implements OnInit {

  coursetypeFormRegistration:FormGroup;
  submitted = false;
  
  ctype ;
 coursetype;
 id;
  constructor(private formbuilder:FormBuilder,private router:Router,private easydeelservice:EasydealService,
    private toaster:ToastrService) { }

  ngOnInit() {
    this.coursetypeFormRegistration = this.formbuilder.group(
      {
        
       ctype:['', Validators.required],
        
    })
    this.coursetype = JSON.parse(sessionStorage.getItem("coursetype"));
    this.ctype = this.coursetype['cource_name'];
    this.id =this.coursetype['_id']

  }
get f() { return this.coursetypeFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.coursetypeFormRegistration.invalid) {
        return;
    }
    else{
      // let s:String;
      // s = this.ctype;
      // console.log();
      let req = {
        "courceName":this.ctype.toUpperCase( ),
      }
     
      
      
      this.easydeelservice.editcourse(req,this.id).subscribe(
        data=>{
          this.toaster.success("Course type updated successfully");
          this.router.navigate(['/coursetype'])
        },
        error=>{

        }
      )
    }
  }
}