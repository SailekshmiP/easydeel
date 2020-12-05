import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryFormRegistration:FormGroup;
  submitted = false;
  
  cat_id;
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
  getcatdetails;
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
this.getcatdetails=JSON.parse(sessionStorage.getItem("cat"));
this.cname=this.getcatdetails['category_name'];
this.mtype=this.getcatdetails['category_menutype'];
this.showorhide=this.getcatdetails['category_show'];
this.status=this.getcatdetails['category_state'];
this.cat_id=this.getcatdetails['_id']
  }
get f() { return this.categoryFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.categoryFormRegistration.invalid) {
        return;
    }
    else{
      this.formData.append("category_name",this.cname)
      this.formData.append("show",this.showorhide)
      this.formData.append("category_menutype",this.mtype)
      this.formData.append("state",this.status)
      this.formData.append("cat_img",this.currentphoto)
     this.easydealservice.editcategory(this.formData,this.cat_id).subscribe(
       data=>{
        console.log(data);
     
        this.router.navigate(['/home']);
        this.formData.delete;
       },
       error=>{
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