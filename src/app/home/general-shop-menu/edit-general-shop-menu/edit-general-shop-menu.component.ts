import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-general-shop-menu',
  templateUrl: './edit-general-shop-menu.component.html',
  styleUrls: ['./edit-general-shop-menu.component.css']
})
export class EditGeneralShopMenuComponent implements OnInit {

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
  generalsmenu;
  id;
  gmenu:any =[];
  constructor(private formbuilder: FormBuilder,
     private easydeelservice: EasydealService, private router: Router, private toastr: ToastrService) { }

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
      this.gmenu = JSON.parse(sessionStorage.getItem("gmenu"));
      console.log(this.gmenu);
      

      this.sname = this.gmenu.shop_id['_id']
      this.iname = this.gmenu.generalmenu_id['_id']
      this.iquant = this.gmenu['itm_qnty']
      this.iprice = this.gmenu['itm_price']
      this.israte = this.gmenu['itm_srate']
      this.imrp = this.gmenu['itm_mrp']
      this.idamount = this.gmenu['itm_disc']
      this.idpercent = this.gmenu['itm_discam']
      this.cname = this.gmenu.category_id['_id']
      this.id = this.gmenu['_id']
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
      this.easydeelservice.editgeneralmenu(req,this.id).subscribe(

        data => {
          this.toastr.success("General shop menu updated Successfully");
          this.router.navigate(['/generalshopmenu']);
        },
        error => {
          this.toastr.success("General shop menu updated unsuccessful");
          // this.router.navigate(['/generalshopmenu'])
        }
      )

    }
  }
}
