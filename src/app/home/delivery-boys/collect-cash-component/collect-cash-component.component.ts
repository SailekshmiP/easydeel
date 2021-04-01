import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-collect-cash-component',
  templateUrl: './collect-cash-component.component.html',
  styleUrls: ['./collect-cash-component.component.css']
})
export class CollectCashComponentComponent implements OnInit {
  earnings;
  apiUrl;
  id;
  points;
  cashinhand;
  earningspointdisplay;
  constructor(@Inject(MAT_DIALOG_DATA) data, private easydeelservice:EasydealService,
  private toaster:ToastrService,
  private dialogRef: MatDialogRef<CollectCashComponentComponent>) 
  { 
    this.id = data['_id'];
    console.log(data);
    this.cashinhand = data['money_hand'];
    this.earningspointdisplay = data['earnings'];

  }
  ngOnInit() {
  }
  addd(){
    let req = {
      "money_hand":this.points,
      "earnings":this.earnings
    } 
    this.easydeelservice.addearningsdeliveryboy(this.id,req).subscribe(
      data =>{
        this.dialogRef.close();
        this.toaster.success("Redeem point added");
      },
      error =>{
        this.toaster.error("unable to add Redeem point");
      }
    )
  }
}
