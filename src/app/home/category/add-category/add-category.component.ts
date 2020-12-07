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

    // stop here if form is invalid
    if (this.categoryFormRegistration.invalid) {
        return;
    }
    else{
      this.formData.append("category_name",this.cname.toUpperCase( ))
      this.formData.append("show",this.showorhide)
      this.formData.append("category_menutype",this.mtype)
      this.formData.append("state",this.status)
      this.formData.append("cat_img",this.currentphoto)
     this.easydealservice.addcategory(this.formData).subscribe(
       data=>{
        console.log(data);
        this.formData.delete;
        this.router.navigate(['/home']);
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