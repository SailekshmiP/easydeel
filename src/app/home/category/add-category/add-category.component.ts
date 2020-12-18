import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryFormRegistration:FormGroup;
  submitted = false;
  alldata :any =[
    {
      "location": "ALL",
    "location_state": "Active",
    "__v": 0,
    "_id": "123456789"
    }
  ]
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
  sessiondayssRepat;
  repeatsessiondays:any=[];
  value;
  locations :any =[];
  constructor(private formbuilder:FormBuilder,private toaster:ToastrService,
    private easydealservice:EasydealService,private router:Router) { }

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
        check: ['', Validators.required],
        checkeddays: this.formbuilder.array([]),
    })
    this.getalllocations();
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
      for (let i = 0; i < this.sessiondayssRepat.length; i++) {
        this.formData.append("locationId", this.sessiondayssRepat[i])

      }


     this.easydealservice.addcategory(this.formData).subscribe(
       data=>{
        this.isLoading = false;
        this.button = 'Submit';
        console.log(data);
        this.toaster.success("Category Added Successfully")
        this.formData.delete;
        this.router.navigate(['/home']);
       },
       error=>{
        this.isLoading = false;
        this.button = 'Submit';
        let err = error['responce'];
        this.toaster.error(err);

         console.log(error);
        this.formData.delete;
         
       }
       
     )

    }
  }
  onChange(time: string, isChecked: boolean) {
    this.sessiondayssRepat = [];
    const emailFormArray = <FormArray>this.categoryFormRegistration.controls.checkeddays;
    if (isChecked) {
      emailFormArray.push(new FormControl(time));
      this.value = emailFormArray['value']
      //console.log(this.value)

      for (let j = 0; j < this.value.length; j++) {
        this.sessiondayssRepat.push(this.value[j]);

      }
      console.log(this.sessiondayssRepat)

    }

    else {
      let index = emailFormArray.controls.findIndex(x => x.value == time)
      emailFormArray.removeAt(index);
    }


  }
  getalllocations() {
    this.easydealservice.getalllocations().subscribe(
      data => {
        console.log(data);

        this.locations = data;
        this.repeatsessiondays.push(this.alldata);
        this.repeatsessiondays = this.locations;


      },
      error => {
        console.log(error);

      }
    )
  }
  addcategoryimage(event) {

    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
    
    //  console.log(this.currentFoto)
  }
}