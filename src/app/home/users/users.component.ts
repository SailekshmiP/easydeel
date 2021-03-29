import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EasydealService } from 'src/app/_services/easydeal.service';
import { AddRedeempointComponent } from './add-redeempoint/add-redeempoint.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['id', 'name', 'address', 'phonenumber','redeempoint', 'action'];
  dataSource = new MatTableDataSource();
  loginstatus;
  userdetails;
  // @ViewChiloginstatusld(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelervice:EasydealService,public dialog: MatDialog) { }

  ngOnInit() {
    this.loginstatus = JSON.parse(localStorage.getItem("loginstatus"))
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.getallusers();

  }
  getallusers()
  {
    if(this.loginstatus =='masteradmin')
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
    else if(this.loginstatus == 'locationamin')   {
      let locationid=this.userdetails['locationId']._id;
      console.log(locationid);
      this.easydeelervice.getallusersbyloation(locationid).subscribe(
        data =>{
          let a :any = [];
          a = data['User'];
          this.dataSource.data = a;
        },
        error =>{
  
        }
      )
    }
    
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  addpont(s){
    console.log(s);
    const dialogRef = this.dialog.open(AddRedeempointComponent, {
      data: s,
      height:"auto"
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('The dialog was closed');
      
    });
  }
}
