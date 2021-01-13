import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['id', 'name', 'address', 'phonenumber', 'email','redeempoint', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelervice:EasydealService) { }

  ngOnInit() {
    this.getallusers();
  }
  getallusers()
  {
    this.easydeelervice.getallusers().subscribe(
      data =>{
        let a :any = [];
        a = data;
        this.dataSource.data = a;
      },
      error =>{

      }
    )
  }

}
