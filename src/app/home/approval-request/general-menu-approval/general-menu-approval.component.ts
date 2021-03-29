import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-general-menu-approval',
  templateUrl: './general-menu-approval.component.html',
  styleUrls: ['./general-menu-approval.component.css']
})
export class GeneralMenuApprovalComponent implements OnInit {
  displayedColumns = ['mname', 'sname',  'location',  'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private router:Router,private toaster:ToastrService,private easydeelservice:EasydealService) { }

  ngOnInit() {
    this.getallgmenusforapproval();
  }
  getallgmenusforapproval()
  {
    this.easydeelservice.getallgmeusforapproval().subscribe(
      data =>{
        let arr :any= [];
        arr = data;
        this.dataSource.data = arr;
      },  
      error =>{

      }

    )
  }
  approve(s)
  {
    console.log(s._id);
    let req = {
      "status":"Approved"
  }
    this.easydeelservice.approvemenugeneral(s._id,req).subscribe(
      data =>{
        this.toaster.success("Approved")
        this.ngOnInit();
      },
      error =>{
        this.toaster.error("Unable to approve")
      }
    )
    
  }
  Reject(s){
    console.log(s._id);
    let req = {
      "status":"Reject"
  }
    this.easydeelservice.approvemenugeneral(s._id,req).subscribe(
      data =>{
        this.toaster.success("Rejected");
        this.ngOnInit();

      },
      error =>{
        this.toaster.error("Unable to Reject")
      }
    )
    
  }
}