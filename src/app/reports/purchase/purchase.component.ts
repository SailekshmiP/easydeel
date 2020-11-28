import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  displayedColumns = ['slno', 'shopname', 'location', 'purchaseamount'];
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
        "purchase": "All"
      },
      {
        "id": "`1",
        "purchase": "Adithya"
      },   {
        "id": "`1",
        "purchase": "Murali"
      },   {
        "id": "`1",
        "purchase": "Thaza"
      },
    ]
    }
    
    else if (s == "l") {
      this.results = [
        {
        "id": "`1",
        "purchase": "All"
      },
      {
        "id": "`1",
        "purchase": "Kayamkulam"
      },   {
        "id": "`1",
        "purchase": "Mavelikara"
      },   {
        "id": "`1",
        "purchase": "Karunagappally"
      },
    ]
    }

  }
}
