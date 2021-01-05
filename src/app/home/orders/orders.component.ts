import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  displayedColumns = ['orderid', 'customeraddress',  'time',  'date', 'ordertstatus', 'assign', 'action'];
  dataSource = new MatTableDataSource();
result:any=[];
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService, private router: Router, private ToastrService: ToastrService) { }

  ngOnInit() {
    this.getallorder() 
  }
getallorder()
{
this.easydealservice.getallorder().subscribe(
  data =>
  {

    this.result=data['data'];
    this.dataSource.data=this.result;
  },
  error =>
  {

  }
)
}
}
