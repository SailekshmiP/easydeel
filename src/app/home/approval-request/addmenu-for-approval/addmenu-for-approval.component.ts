import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-addmenu-for-approval',
  templateUrl: './addmenu-for-approval.component.html',
  styleUrls: ['./addmenu-for-approval.component.css']
})
export class AddmenuForApprovalComponent implements OnInit {

  restaurantmenuFormRegistration:FormGroup;
  submitted = false;
  
  mname;
  mdes;
  mtype ="";  
  ctype ="";
  mimages;
  // mstyle="";
  result;
  files;
  currentphoto;
  formData = new FormData();
  isLoading = false;
  button = 'Submit';
  isvalidphoto = false;
  locationdetails;
  constructor(private formbuilder:FormBuilder,private toaster:ToastrService,
    private easydealservice:EasydealService,private toastr:ToastrService, private router:Router) { }

  ngOnInit() {
    this.restaurantmenuFormRegistration = this.formbuilder.group(
      {
        mname: ['', Validators.required],
        mdes:['', [Validators.required,Validators.maxLength(50)]],
        mtype:['', Validators.required],
        ctype:['', Validators.required],
        mimages:['', Validators.required],
        // mstyle: ['', Validators.required],
    })
    this.getallcoursetype();
    this.locationdetails = JSON.parse(localStorage.getItem("userdetails"));

  }
  get f() { return this.restaurantmenuFormRegistration.controls; }
  submit(){
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.restaurantmenuFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
        return;
    }
    else{
      if(this.isvalidphoto == true)
      {

     
      this.isLoading = true;
      this.button = 'Processing';
      let lid = this.locationdetails['locationId']._id;
    this.formData.append("menu_name",this. mname.toUpperCase( ))
    this.formData.append("menu_desc",this.mdes)
    this.formData.append("menu_type",this.mtype)
    this.formData.append("courceId",this.ctype)
    this.formData.append("menu_img",this.currentphoto)
    this.formData.append("locationId",lid);
    this.easydealservice.addrestmenuforapproval(this.formData).subscribe(
         data=>{
          this.isLoading = false;
          this.button = 'Submit';
          console.log(data);
          this.formData.delete;
          this.router.navigate(['/locationadminviewrequest']);
          this.toastr.success("Menu Added Successfully. Waiting for approval");
         },
         error=>{
          this.isLoading = false;
          this.button = 'Submit';
           console.log(error);
          this.formData.delete;
          this.toastr.error("Menu Added Unsuccessful");
           
         }
         
       )
      }
      else{
        this.toaster.error('photo should be 300*300 size');
        
      }
    }
  }
  getallcoursetype() {
    this.easydealservice.getallcoursetype().subscribe(
      data => {
        console.log(data);
        this.result = data
      },
      error => {

        console.log(error);

      },
    )

  }

  addmenuimage(event)
  {
    
    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
    this.isvalidphoto = true;
    window.URL = window.URL;
    
    
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.files = event.target.files[0];
    
      let img = new Image();
    
      img.src = window.URL.createObjectURL( this.files );
      reader.readAsDataURL(this.files);
      reader.onload = () => {
        setTimeout(() => {
          const width = img.naturalWidth;
          const height = img.naturalHeight;
    
          window.URL.revokeObjectURL( img.src );
          console.log(width + '*' + height);
          if ( width !== 300 && height !== 300) {
            this.isvalidphoto = false;
              console.log(width,height)
            this.toaster.error('photo should be 300*300 size');
            
          } else {
            this.isvalidphoto = true;
              console.log(width,height)
            this.currentphoto = this.files.item(0);
          
          }
        }, 2000);
          };
      }
  }
}
