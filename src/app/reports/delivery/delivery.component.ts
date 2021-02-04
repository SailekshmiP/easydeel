import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  displayedColumns = ['slno', 'date', 'salesamount', 'deliveryamount'];
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
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  selectedevent(s) {
    console.log(s);
    if (s == "d") {
      this.results = [
        {
        "id": "`1",
        "purchase": "All"
      },
      {
        "id": "`1",
        "purchase": "Adithyan"
      },   {
        "id": "`1",
        "purchase": "Murali"
      },   {
        "id": "`1",
        "purchase": "Thazar"
      },
    ]
    }
    
    // else if (s == "l") {
    //   this.results = [
    //     {
    //     "id": "`1",
    //     "purchase": "All"
    //   },
    //   {
    //     "id": "`1",
    //     "purchase": "Kayamkulam"
    //   },   {
    //     "id": "`1",
    //     "purchase": "Mavelikara"
    //   },   {
    //     "id": "`1",
    //     "purchase": "Karunagappally"
    //   },
    // ]
    // }

  }
}
