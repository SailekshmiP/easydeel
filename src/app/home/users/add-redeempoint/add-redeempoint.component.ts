import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-redeempoint',
  templateUrl: './add-redeempoint.component.html',
  styleUrls: ['./add-redeempoint.component.css']
})
export class AddRedeempointComponent implements OnInit {
  apiUrl;
  id;
  points;
  constructor(@Inject(MAT_DIALOG_DATA) data, private easydeelservice:EasydealService,
  private toaster:ToastrService,
  private dialogRef: MatDialogRef<AddRedeempointComponent>) 
  { 
    this.id = data['_id'];

  }
  ngOnInit() {
  }
  addd(){
    let req = {
      "radeempoint":this.points
    } 
    this.easydeelservice.addpoints(this.id,req).subscribe(
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
