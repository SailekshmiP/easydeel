import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-admin-credentials',
  templateUrl: './edit-admin-credentials.component.html',
  styleUrls: ['./edit-admin-credentials.component.css']
})
export class EditAdminCredentialsComponent implements OnInit {
  editadmincredentialsFormRegistration: FormGroup;
  submitted = false;
  creddetail:any = [];
  
  emailusername;
  password;
  location ="";
  disable = false;
  disabled = false;
  isLoading = false;
  button = 'Submit';
  result:any = [];
  id;
  role;
  requestbody;
  constructor(private formbuilder: FormBuilder,private easydeelservice:EasydealService ,private router:Router) { }

  ngOnInit() {
    this.editadmincredentialsFormRegistration= this.formbuilder.group(
    {
      
      emailusername: ['', Validators.required],
      password: ['', Validators.required],
      location: [''],
      
    })
    this.getalllocations();

    this.creddetail = JSON.parse(sessionStorage.getItem("admincred"));
    this.emailusername = this.creddetail['userName'];
    this.password = this.creddetail['password'];
    this.location = this.creddetail['locationId']._id;
    console.log(this.location);
    
    this.id= this.creddetail['_id'];
    this.role=this.creddetail['role'];
  }
  getalllocations(){
    this.easydeelservice.getalllocations().subscribe(
      data =>{
        console.log(data);
        this.result= data;
  
        
      },
      error =>{
        console.log(error);
        
      }
    )
  }
    submit() {
     
        this.submitted = true;
        this.isLoading = true;
        this.button = 'Processing';
  
      // stop here if form is invalid
      if (this.editadmincredentialsFormRegistration.invalid) {
      
          this.isLoading = false;
          this.button = 'submit';
          return;
        }
        else {
          
          this.isLoading = true;
          this.button = 'Processing';
          if(this.role == 2)
          {
            this.requestbody= {
              "userName":this.emailusername,
              "phoneNumber":"123456789",
              "password":this.password,
              "locationId":this.location,
              "role":this.role
            }
          }
          else{
            this.requestbody = {
              "userName":this.emailusername,
              "phoneNumber":"123456789",
              "password":this.password,
              "role":this.role
            }
            this.id= this.creddetail['_id'];
          }
         
          this.easydeelservice.editlocationadmin(this.id,this.requestbody).subscribe(
            data =>{
                this.router.navigate(['/admincredentials'])
            },
            error =>{

            }
          )
          
      }
     
    }

}