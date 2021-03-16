import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  displayedColumns = ['image', 'shopname', 'categoryname', 'phonenumber','status','action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  options1: any = "";

  results: any=[];
  apiUrl;
  loginstatus:any;
  locationid;
  userdetails;
  firsteventvalue;

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    

    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydealservice:EasydealService,private router:Router,) { }

  ngOnInit() {
    this.loginstatus = JSON.parse(localStorage.getItem("loginstatus"))
     this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    console.log(this.userdetails);
    

    this.apiUrl="https://shopgi.in/";
    this.getallShop();
  }
  getallShop(){

    if(this.loginstatus =='masteradmin')
    {
      this.easydealservice.getshop().subscribe(
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
    else if(this.loginstatus == 'locationamin')   
    {
      this.locationid=this.userdetails['locationId']._id;
      console.log(this.locationid);

    this.easydealservice.getallshopsbylocation(this.locationid).subscribe(
      data =>{
        console.log(data);
        this.results =data;
        this.dataSource.data = this.results;
      },
      error =>{

      }
    )
      
    }
    else if(this.loginstatus =='shopadmin')
    {

    }
    
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  selectedevent(s) {
    console.log(s);
    this.firsteventvalue = s;
    if (s == "s") {
      if(this.loginstatus =='masteradmin')
      {
        this.easydealservice.getshop().subscribe(
          data =>{
            console.log(data);
            this.results =data;
            // this.dataSource.data = this.results;
          },
          error =>{
            console.log(error);
          }
        )
      }
      else if(this.loginstatus == 'locationamin')   
      {
        this.locationid=this.userdetails['locationId']._id;
        console.log(this.locationid);
  
      this.easydealservice.getallshopsbylocation(this.locationid).subscribe(
        data =>{
          console.log(data);
          this.results =data;
          // this.dataSource.data = this.results;
        },
        error =>{
          
        }
      )
        
      }
      else if(this.loginstatus =='shopadmin')
      {
  
      }
    }
    else if (s == "c") {
     
    }
    else if (s == "l") {
        this.easydealservice.getalllocations().subscribe(
          data =>{
       
            let arr :any = [];
            arr = data;
            this.results = [];
            for(let i=0;i<arr.length;i++)
            {
              let req = {
                "_id":arr[i]._id,
                "shop_name":arr[i].location
              }
              this.results.push(req)


            }
            console.log(this.results);
            
          },
          error =>{
            console.log(error);
            
          }
        )
      }

  }
  selectedevent1(si)
  {
    // this.options1 = si;
    if(this.firsteventvalue == 'l')
    {
      console.log(si);
      this.easydealservice.getallshopsbylocation(si).subscribe(
        data =>{
          console.log(data);
          let res :any = [];
          res =data;
          this.dataSource.data = res;
        },
        error =>{
  
        }
      )
      
    }
    else if(this.firsteventvalue == 'c')
    {
      
    }
  }
  edit(r)
  {
    sessionStorage.setItem("shop",JSON.stringify(r))
    // this.router.navigate(['/editshop'])
    window.open('#/editshop', '_blank');
  }
  active(r)
  {
    this.easydealservice.changestatusactive(r._id).subscribe(
      data =>{
        this.ngOnInit();
      },
      error =>{
        this.ngOnInit();

      },
    )

  }
  inactive(r)
  {
    this.easydealservice.changestatusactive(r._id).subscribe(
      data =>{
        this.ngOnInit();
      },
      error =>{
        this.ngOnInit();

      },
    )

  }
}
