import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-credentials',
  templateUrl: './admin-credentials.component.html',
  styleUrls: ['./admin-credentials.component.css']
})
export class AdminCredentialsComponent implements OnInit {

  
  displayedColumns = ['slno', 'emailusername','location'];
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