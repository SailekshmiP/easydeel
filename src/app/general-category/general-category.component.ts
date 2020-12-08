import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-general-category',
  templateUrl: './general-category.component.html',
  styleUrls: ['./general-category.component.css']
})
export class GeneralCategoryComponent implements OnInit {
  displayedColumns = ['id', 'categorytype', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice: EasydealService) { }

  ngOnInit() {
    this.getallcoursetype();
  }

  getallcoursetype() {
    this.easydeelservice.getallcoursetype().subscribe(
      data => {
        let result: any = []
        result = data;
        this.dataSource.data = result
      },
      error => {

      },
    )

  }
}
