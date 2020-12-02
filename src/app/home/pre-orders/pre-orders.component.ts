import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pre-orders',
  templateUrl: './pre-orders.component.html',
  styleUrls: ['./pre-orders.component.css']
})
export class PreOrdersComponent implements OnInit {

  displayedColumns = ['orderid', 'bookingdate', 'customernameandaddress','contactno', 'deliverydate','deliverytime','assign','action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
  }


}