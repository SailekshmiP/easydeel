import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns = ['id', 'categoryname', 'image', 'action'];
  dataSource = new MatTableDataSource();

  apiUrl;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  results :any =[];
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydealservice:EasydealService, private router:Router) { }

  ngOnInit() {
    this.apiUrl="http://shopgi.in/";


    this.getallCategory();

  }
  edit(s){
    sessionStorage.setItem("cat",JSON.stringify(s));
    this.router.navigate(['/editcategory'])
  
  }
    getallCategory(){
    this.easydealservice.getcat().subscribe(
      data =>{
        console.log(data);
        this.results =data;
        this.dataSource.data = this.results;
      },
      error =>{
        console.log(error);
      }
    )
  }
}
