import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';
import { CollectCashComponentComponent } from './collect-cash-component/collect-cash-component.component';

@Component({
  selector: 'app-delivery-boys',
  templateUrl: './delivery-boys.component.html',
  styleUrls: ['./delivery-boys.component.css']
})
export class DeliveryBoysComponent implements OnInit {
  displayedColumns = ['id', 'name', 'address', 'mobilenumber' ,'moneyinhand','deliveryboyearnings','status', 'action','collectcash'];
  dataSource = new MatTableDataSource();
  status;
  loginstatus;
  userdetails;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private toaster:ToastrService,private easydeelervice:EasydealService, public dialog: MatDialog,
    private router:Router) { }

  ngOnInit() {
    this.loginstatus = JSON.parse(localStorage.getItem("loginstatus"));
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.getalldeliveryboy();


  }
  getalldeliveryboy()
  {

    if (this.loginstatus == 'masteradmin') {
      this.easydeelervice.getalldeliveryboy().subscribe(
        data =>{
          let s :any= [];
          s= data;
          this.dataSource.data = s;
        },
        error =>{
  
        }
      )
    }
    else if (this.loginstatus == 'locationamin') 
    {
      let ud = this.userdetails['locationId']._id;
      this.easydeelervice.getalldeliveryboybylocations(ud).subscribe(
        data =>{
          let s :any= [];
          s= data;
          this.dataSource.data = s;
        },
        error =>{
  
        }
      )
    }
 
  }
  edit(s) {
    sessionStorage.setItem("deliveryboys", JSON.stringify(s));
    this.router.navigate(['/editdeliveryboys'])
  }
  collectcash(s)
  {
    const dialogRef = this.dialog.open(CollectCashComponentComponent, {
      data: s,
      width:"500px",
     
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
