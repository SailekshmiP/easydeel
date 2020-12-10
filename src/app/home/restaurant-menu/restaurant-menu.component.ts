import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  displayedColumns = ['id', 'menuname', 'menuimage', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  results: any=[];
  apiUrl;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydealservice: EasydealService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    this.apiUrl="https://shopgi.in/";
    this.getallmenu();
  }

  getallmenu() {

    this.easydealservice.getallmenu().subscribe(

      data => {
        console.log(data);
this.results=data;
this.dataSource.data=this.results;
      },
      error => {
        console.log(error);

      }
    )
  }
  active(s) {
    console.log(s);

    this.easydealservice.changestatusrestmenu(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        this.ngOnInit();
      },
      error => {
        this.toastr.error("Unable to Update status");
        this.ngOnInit();

      }
    )
  }
  inactive(s) {

    this.easydealservice.changestatusrestmenu(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        this.ngOnInit();
      },
      error => {
        this.toastr.error("Unable to Update status");
        this.ngOnInit();

      }
    )
  }
  edit(s)
  {
    sessionStorage.setItem("restmenu",JSON.stringify(s));

    this.router.navigate(['/edit-rest-menu']);
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


