import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryFormRegistration:FormGroup;
  submitted = false;
  
  files;
  currentphoto;
  cname;
  mtype = "";
  cimage;
  showorhide = "Show";
  status = "Active";
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  formData = new FormData();
  isLoading = false;
  button = 'Submit';
  constructor(private formbuilder:FormBuilder,private easydealservice:EasydealService,private router:Router) { }

  ngOnInit() {
    this.categoryFormRegistration = this.formbuilder.group(
      {
        cname: ['', Validators.required],
        mtype: ['', Validators.required],
        cimage: ['', Validators.required],
        showorhide:['', Validators.required],
        status:['',Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.categoryFormRegistration.controls; }

  submit(){
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    // stop here if form is invalid
    if (this.categoryFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'Submit';
        return;
    }
    else{
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("category_name",this.cname.toUpperCase( ))
      this.formData.append("show",this.showorhide)
      this.formData.append("category_menutype",this.mtype)
      this.formData.append("state",this.status)
      this.formData.append("cat_img",this.currentphoto)
     this.easydealservice.addcategory(this.formData).subscribe(
       data=>{
        this.isLoading = false;
        this.button = 'Submit';
        console.log(data);
        this.formData.delete;
        this.router.navigate(['/home']);
       },
       error=>{
        this.isLoading = false;
        this.button = 'Submit';
         console.log(error);
        this.formData.delete;
         
       }
       
     )

    }
  }
  addcategoryimage(event) {

    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
    
    //  console.log(this.currentFoto)
  }
}