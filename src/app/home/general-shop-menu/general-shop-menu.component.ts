import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-general-shop-menu',
  templateUrl: './general-shop-menu.component.html',
  styleUrls: ['./general-shop-menu.component.css']
})
export class GeneralShopMenuComponent implements OnInit {
  displayedColumns = ['id', 'itemname', 'itemprice', 'itemquantity', 'action'];
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
