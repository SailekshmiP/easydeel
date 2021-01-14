import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  result :any = [];
  details:any = [];
  itemresult:any = [];
  oid;
  deliveryboys :any = [];
  dboyid;
  status ;
  dboyName;
  isStatus= false;
  constructor(@Inject(MAT_DIALOG_DATA) data, private easydeelservice:EasydealService,private toaster:ToastrService,
  private dialogRef: MatDialogRef<ViewOrderDetailsComponent>) 
  { 
    this.details = data;
    console.log(this.details);
    this.status = this.details.order_status;
    console.log(this.status);
    if(this.details.dboy_id == null)
    {
      this.dboyName = "";
    }
    else{
      this.dboyName = this.details.dboy_id['name']

    }
    if(this.status == 'Pending')
    {
      console.log('here');
      
      this.isStatus = true;
    }
    else{
      console.log('ele');
      this.isStatus = false;

    }

    this.result = data['items'];
    this.getorderbyorderid();
    this.getalldeliveryboy();
  }

  ngOnInit() {
  }
  getorderbyorderid()
  {
    this.oid = this.details['order_id']
    this.easydeelservice.getorerbyuserid(this.oid).subscribe(
      data =>{
        this.itemresult = data['data'];
      },
      error =>{

      }
    )
  }
  getalldeliveryboy()
  {
    this.easydeelservice.getalldeliveryboy().subscribe(
      data =>{
      
        this.deliveryboys = data;
      },
      error =>{

      }
    )
  }
  assgin(){
      let req = {
        "deliverboy":this.dboyid
      }
      console.log(req);
      this.easydeelservice.assignorder(req,this.details.customer_id['_id'],this.details.order_id).subscribe(
        data =>{
          this.toaster.success("Order Assigned");
          this.dialogRef.close();
        },
        error =>{

        }
      )
  }
  reject(){
    let req = {
      "order_status":"Reject"
    }
    this.easydeelservice.reject(req,this.details.customer_id['_id'],this.details.order_id).subscribe(
      data =>{
        this.toaster.success("Order Assigned");
        this.dialogRef.close();
      },
      error =>{

      }
    )
  }
}