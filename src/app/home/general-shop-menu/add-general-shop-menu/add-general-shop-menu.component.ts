import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-general-shop-menu',
  templateUrl: './add-general-shop-menu.component.html',
  styleUrls: ['./add-general-shop-menu.component.css']
})
export class AddGeneralShopMenuComponent implements OnInit {
  generalshopmenuFormRegistration: FormGroup;
  submitted = false;
  generalmenu;
  sname = '';
  cname = '';
  iquant;
  iprice;
  israte;
  imrp;
  idamount;
  idpercent;
  showorhide;
  status;
  results;
  cat;
  iname ='';
  constructor(private formbuilder: FormBuilder, private easydeelservice: EasydealService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.generalshopmenuFormRegistration = this.formbuilder.group(
      {
        sname: ['', Validators.required],
        cname: ['', Validators.required],
        iquant: ['', Validators.required],
        iprice: ['', Validators.required],
        israte: ['', Validators.required],
        imrp: ['', Validators.required],
        idamount: ['', Validators.required],
        idpercent: ['', Validators.required],
        iname: ['', Validators.required],

        // showorhide: ['', Validators.required],
        // status: ['', Validators.required],
      })
    this.getallShop();
    this.getallcategorytype();
    this.getallgeneralmenu();
  }
  get f() { return this.generalshopmenuFormRegistration.controls; }
  getallShop() {
    this.easydeelservice.getshop().subscribe(
      data => {
        console.log(data);
        this.results = data;

      },
      error => {
        console.log(error);
      }
    )
  }
  getallcategorytype() {
    this.easydeelservice.getallgeneralcategory().subscribe(
      data => {

        this.cat = data;

      },
      error => {

      },
    )

  }
  getallgeneralmenu()
  {
  this.easydeelservice.getallgeneralmenu().subscribe(
  data=>
  {
  this.generalmenu=data;
  // this.dataSource.data = this.results;
  },
    error =>
    {
  
    }
  )
  }
  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.generalshopmenuFormRegistration.invalid) {
      return;
    }
    else {
      let req = {
        "shop_id": this.sname,
        "category_id": this.cname,
        "generalmenu_id":this.iname,
        "quantity": this.iquant,
        "itemprice": this.iprice,
        "salesrate": this.israte,
        "itm_discount": this.idpercent,
        "discamount": this.idamount,
        "mrp": this.imrp,
      }
      this.easydeelservice.addgeneralshopmenu(req).subscribe(

        data => {
          this.toastr.success("General shop menu added Successfully");
          this.router.navigate(['/generalshopmenu']);
        },
        error => {
          this.toastr.success("General shop menu added unsuccessful");
          this.router.navigate(['/generalshopmenu'])
        }
      )

    }
  }
}