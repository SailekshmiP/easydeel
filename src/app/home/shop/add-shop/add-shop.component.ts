import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
  // shopform:FormGroup;
  sessiondayssRepat
  repeatsessiondays = [
    {
      "id": "6",
      "day": "Kochi",

    },

    {
      "id": "0",
      "day": "Haripad",
    },
    {
      "id": "1",
      "day": "Alappuzha",
    },
    {
      "id": "2",
      "day": "Kollam",
    },
    {
      "id": "3",
      "day": "Karthikappally",
    },

  ]
  value;

  shopFormRegistration: FormGroup;
  submitted = false;

  sname;
  scat = "";
  saddress;
  simage;
  sln;
  sphn;
  sotime;
  sctime;
  profit;
  movalue;
  sdperc;
  sdamnt;
  pucharge;
  dcharge;
  dtime;
  showorhide = "Show";
  status = "Active";
  check;
  checkeddays;
  files;
  currentphoto;
  resultscat: any = [];
  locations: any = [];
  isLoading = false;
  button = 'Submit';

  
fileData: any;
error;
imagePreview;
employee
isvalidphoto = false;

  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService,
     private router: Router,
    private toaster: ToastrService) { }
  formData = new FormData();
  ngOnInit() {
    this.shopFormRegistration = this.formbuilder.group({
      sname: ['', Validators.required],
      scat: ['', Validators.required],
      saddress: ['', Validators.required],
      sln: [''],
      sphn: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      dtime: ['', Validators.required],
      sotime: ['', Validators.required],
      sctime: ['', Validators.required],
      profit: ['', Validators.required],
      movalue: ['', Validators.required],
      sdperc: ['', Validators.required],
      sdamnt: ['', Validators.required],
      simage: ['', Validators.required],
      pucharge: ['', Validators.required],
      dcharge: ['', Validators.required],
      showorhide: ['', Validators.required],
      status: ['', Validators.required],
      check: ['', Validators.required],
      checkeddays: this.formbuilder.array([]),
    })
    this.getallCategory();
    this.getalllocations();

  }


  onChange(time: string, isChecked: boolean) {
    this.sessiondayssRepat = [];
    const emailFormArray = <FormArray>this.shopFormRegistration.controls.checkeddays;
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
  get f() { return this.shopFormRegistration.controls; }

  getallCategory() {
    this.easydealservice.getcat().subscribe(
      data => {
        console.log(data);
        this.resultscat = data;

      },
      error => {
        console.log(error);
      }
    )
  }

  getalllocations() {
    this.easydealservice.getalllocations().subscribe(
      data => {
        console.log(data);

        this.locations = data;

        this.repeatsessiondays = this.locations;


      },
      error => {
        console.log(error);

      }
    )
  }
  addshopimage(event) {

    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
  }
  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    if (this.shopFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("shop_name", this.sname.toUpperCase())
      this.formData.append("category_id", this.scat)
      this.formData.append("shop_phone", this.sphn)
      this.formData.append("shop_landline", this.sln)
      this.formData.append("open_time",this.sotime)
      this.formData.append("clos_time",this.sctime)
      this.formData.append("deliveryTime",this.dtime)
      // this.formData.append("open_time", "10")
      // this.formData.append("clos_time", "50")
      this.formData.append("shop_discount", this.sdperc)
      this.formData.append("shop_discamountamount", this.sdamnt)
      this.formData.append("pickupRate", this.pucharge)
      this.formData.append("deliveryRate", this.dcharge)
      this.formData.append("minimum", this.movalue)
      this.formData.append("show", this.showorhide)
      this.formData.append("state", this.status)
      this.formData.append("profitpercentage", this.profit)
      this.formData.append("shop_img", this.currentphoto)
      this.formData.append("shop_address", this.saddress)

      for (let i = 0; i < this.sessiondayssRepat.length; i++) {
        this.formData.append("locationId", this.sessiondayssRepat[i])

      }

      this.easydealservice.addshop(this.formData).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          console.log(data);
          this.formData.delete;
          this.router.navigate(['/shop']);
          this.toaster.success("Shop Added Successfully")
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
          console.log(error);
          this.formData.delete;

        }

      )

    }

  }
  addcategoryimage(event) {
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
          if ( width !== 100 && height !== 100) {
            this.isvalidphoto = true;
              console.log(width,height)
            this.toaster.error('photo should be 100*100 size');
            
            // form.reset();
          } else {
            this.isvalidphoto = false;
              console.log(width,height)
            // this.imgURL = reader.result;
            this.currentphoto = this.files.item(0);
          
          }
        }, 2000);
          };
      }
      }
    
}