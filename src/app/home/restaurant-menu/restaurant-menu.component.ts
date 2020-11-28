import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  displayedColumns = ['id', 'menuname', 'menuimage', 'location', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  options: any = "";
  results: any[];
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
  }
  selectedevent(r) {
    console.log(r);
    if (r == "m") {
      this.results = [
        {
        "id": "`1",
        "restaurantmenu": "Breakfast"
      },
      {
        "id": "`1",
        "restaurantmenu": "Lunch"
      },   
      {
        "id": "`1",
        "restaurantmenu": "Dinner"
      },   
      {
        "id": "`1",
        "restaurantmenu": "Starter"
      },
    ]
    }
    else if (r == "c") {
      this.results = [
        {
        "id": "`1",
        "restaurantmenu": "Veg"
      },
      {
        "id": "`1",
        "restaurantmenu": "Non-veg"
      },  
      
    ]
  }
}
}


