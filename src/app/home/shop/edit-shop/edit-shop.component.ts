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
  showorhide = "Show";
  status = "Active";
  check;
  checkeddays;
  files;
  currentphoto;
  resultscat: any = [];
  locations: any = [];
  shopdetails;
  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService, private router: Router,
    private toaster: ToastrService) { }
  formData = new FormData();
  ngOnInit() {
    this.shopFormRegistration = this.formbuilder.group({
      sname: ['', Validators.required],
      scat: ['', Validators.required],
      saddress: ['', Validators.required],
      sln: ['', Validators.required],
      sphn: ['', Validators.required],
      sotime: ['', Validators.required],
      sctime: ['', Validators.required],
      profit: ['', Validators.required],
      movalue: ['', Validators.required],
      sdperc: ['', Validators.required],
      simage: ['', Validators.required],
      pucharge: ['', Validators.required],
      sdamnt: ['', Validators.required],
      dcharge: ['', Validators.required],
      showorhide: ['', Validators.required],
      status: ['', Validators.required],
      check: ['', Validators.required],
      checkeddays: this.formbuilder.array([]),
    })
    this.getallCategory();
    this.getalllocations();
    this.shopdetails = JSON.parse(sessionStorage.getItem("shop"));
    this.sname = this.shopdetails['shop_name']
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
    if (this.shopFormRegistration.invalid) {
      return;
    }
    else {
      this.formData.append("shop_name", this.sname.toUpperCase( ))
      this.formData.append("category_id", this.scat)
      this.formData.append("shop_phone", this.sphn)
      this.formData.append("shop_landline", this.sln)
      // this.formData.append("open",this.sotime)
      // this.formData.append("close",this.sctime)
      this.formData.append("open_time", "10")
      this.formData.append("clos_time", "50")
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
      this.formData.append("locationId", this.sessiondayssRepat['0'])

      this.easydealservice.editshop(this.formData).subscribe(
        data => {
          console.log(data);
          this.formData.delete;
          this.router.navigate(['/shop']);
          this.toaster.success("Shop update Successfully")
        },
        error => {
          console.log(error);
          this.formData.delete;

        }

      )

    }

  }
}
