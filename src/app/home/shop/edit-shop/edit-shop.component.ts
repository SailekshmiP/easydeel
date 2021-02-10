import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css']
})
export class EditShopComponent implements OnInit {
  // shopform:FormGroup;
  sessiondayssRepat
  repeatsessiondays = [];
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
  sdamnt;
  sdperc;
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
  shopdetails;
  id;
  isLoading = false;
  button = 'Submit';
  sessionarray:any=[];
  condtionyesorno = 'no';
  fileData: any;
error;
imagePreview;
employee
isvalidphoto = false;
shoplocations:any=[];

  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService, private router: Router,
    private toaster: ToastrService) { }
  formData = new FormData();
  ngOnInit() {
    this.shopFormRegistration = this.formbuilder.group({
      sname: ['', Validators.required],
      scat: ['', Validators.required],
      saddress: ['', Validators.required],

      sln: ['', Validators.required],
      sphn: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      sotime: ['', Validators.required],

      sctime: ['', Validators.required],
      profit: ['', Validators.required],
      movalue: ['', Validators.required],

      sdperc: ['', Validators.required],
      pucharge: ['', Validators.required],
      dcharge: ['', Validators.required],
      dtime: ['', Validators.required],
      sdamnt: ['', Validators.required],
      simage: [''],
      showorhide: ['', Validators.required],
      status: ['', Validators.required],
      check: [''],
      checkeddays: this.formbuilder.array([]),
    })
    this.getallCategory();
    this.getalllocations();
    this.shopdetails = JSON.parse(sessionStorage.getItem("shop"));
    this.sname = this.shopdetails['shop_name']
    this.dtime = this.shopdetails['deliveryTime']
    this.scat = this.shopdetails.category_id['_id']
    this.saddress = this.shopdetails['shop_address']
    this.sln = this.shopdetails['shop_landline']
    this.sphn = this.shopdetails['shop_phone']
    this.sotime = this.shopdetails['open_time']
    this.sctime = this.shopdetails['clos_time']
    this.profit = this.shopdetails['profitpercentage']
    this.movalue = this.shopdetails['minimum']
    this.sdperc = this.shopdetails['shop_discount']
    this.pucharge = this.shopdetails['pickupRate']
    this.dcharge = this.shopdetails['deliveryRate']
    this.sdamnt = this.shopdetails['shop_discamountamount']
    this.showorhide = this.shopdetails['shop_show']
    this.status = this.shopdetails['shop_state']
    this.id=this.shopdetails['_id']
    this.shoplocations = this.shopdetails['locationId'];
    // this.sessiondayssRepat = this.shopdetails['locationId'];
    // console.log(this.sessiondayssRepat);
    // // let arr = [];
    // for(let i=0;i<this.sessiondayssRepat.length;i++)
    // {
    //   this.sessionarray.push(this.sessiondayssRepat[i]._id)
    // }
    // console.log(this.sessionarray);
    // this.sessiondayssRepat = this.sessionarray;
    
    // this.repeatsessiondays=this.shopdetails['locationId']
    // console.log(this.repeatsessiondays);
    // let arr =[];
    // arr.push(this.shopdetails.locationId['_id']);
    // this.sessiondayssRepat =arr;
    // console.log(this.sessiondayssRepat=<FormArray>this.shopFormRegistration.controls.checkeddays);

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

      // this.sessiondayssRepat.push(this.shoplocations);
    }


    // console.log(emailFormArray)
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
      console.log("s")
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("shop_name", this.sname.toUpperCase( ))
      this.formData.append("category_id", this.scat)
      this.formData.append("shop_phone", this.sphn)
      this.formData.append("shop_landline", this.sln)
      // this.formData.append("open",this.sotime)
      // this.formData.append("close",this.sctime)
      this.formData.append("open_time", this.sotime)
      this.formData.append("clos_time", this.sctime)
      this.formData.append("shop_discount", this.sdperc)
      this.formData.append("shop_discamountamount", this.sdamnt)
      // this.formData.append("shop_discamountamount", this.dcharge)
      this.formData.append("pickupRate", this.pucharge)
      this.formData.append("deliveryRate", this.dcharge)
      this.formData.append("minimum", this.movalue)
      this.formData.append("show", this.showorhide)
      this.formData.append("state", this.status)
      this.formData.append("profitpercentage", this.profit)
      this.formData.append("shop_img", this.currentphoto)
      this.formData.append("shop_address", this.saddress)

      // this.formData.append("locationId", this.sessiondayssRepat['0'])
      console.log(this.sessiondayssRepat);
      if(this.condtionyesorno == 'yes')
      {
        for (let i = 0; i < this.sessiondayssRepat.length; i++) {
          this.formData.append("locationId",this.sessiondayssRepat[i])
          // console.log("locationId", this.sessiondayssRepat[i]['_id']);
          
        }
      }
      else{
        for(let i=0;i<this.shoplocations.length;i++)
        {
          this.formData.append("locationId",this.shoplocations[i]._id)
        }
      }
   

      this.easydealservice.editshop(this.formData,this.id).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          console.log(data);
          this.formData.delete;
          this.router.navigate(['/shop']);
          this.toaster.success("Shop update Successfully")
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
