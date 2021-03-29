import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-admin-credentials',
  templateUrl: './admin-credentials.component.html',
  styleUrls: ['./admin-credentials.component.css']
})
export class AdminCredentialsComponent implements OnInit {

  
  displayedColumns = ['slno', 'emailusername','role','location','password','edit'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice:EasydealService,private router:Router) { }

  ngOnInit() {
    this.easydeelservice.getalladmindetails().subscribe(
      data =>
      {
        let arr:any = [];
        arr =data;
        this.dataSource.data = arr;
      },
      error =>{

      }
    )
  }
  edit(s){
    sessionStorage.setItem("admincred",JSON.stringify(s));
    this.router.navigate(['/editadmincredentials']);
  }

}