import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-new-user-location-redeempoint',
  templateUrl: './new-user-location-redeempoint.component.html',
  styleUrls: ['./new-user-location-redeempoint.component.css']
})
export class NewUserLocationRedeempointComponent implements OnInit {
  displayedColumns = ['location','ramount', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice:EasydealService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.getlocationredeempoint();
  }

  getlocationredeempoint()
  {
    this.easydeelservice.getallamoutnvalueslocation().subscribe(
      data =>{
        let res:any = [];
        res = data;
        this.dataSource.data = res;

      },
      error =>{

      }
    )
  }
  edit(s)
  {
    sessionStorage.setItem("redeemamount",JSON.stringify(s));
    this.router.navigate(['/editnewuserlocationredeempoint'])
  }
}
