import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  displayedColumns = ['image', 'shopname', 'categoryname', 'phonenumber', 'servicelocation', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  results: any[];
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
  }

  selectedevent(s) {
    console.log(s);
    if (s == "s") {
      this.results = [
        {
        "id": "`1",
        "shopname": "Blackforest"
      },
      {
        "id": "`1",
        "shopname": "Adithya"
      },   {
        "id": "`1",
        "shopname": "Murali"
      },   {
        "id": "`1",
        "shopname": "Thaza"
      },
    ]
    }
    else if (s == "c") {
      this.results = [
        {
        "id": "`1",
        "shopname": "Hotel"
      },
      {
        "id": "`1",
        "shopname": "Restaurant"
      },   {
        "id": "`1",
        "shopname": "Supermarket"
      },   {
        "id": "`1",
        "shopname": "Services"
      },
    ]
    }
    else if (s == "l") {
      this.results = [
        {
        "id": "`1",
        "shopname": "Haripad"
      },
      {
        "id": "`1",
        "shopname": "Kayamkulam"
      },   {
        "id": "`1",
        "shopname": "Mavelikara"
      },   {
        "id": "`1",
        "shopname": "Karunagappally"
      },
    ]
    }

  }
}
