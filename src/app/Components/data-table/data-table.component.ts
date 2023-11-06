import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
// import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
// import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MobileDataComponent } from '../mobile-data/mobile-data.component';
import { WebDataComponent } from '../web-data/web-data.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  // standalone: true,
  // imports: [MatTableModule, MatPaginatorModule]
})
export class DataTableComponent implements AfterViewInit  { 

  constructor(){}

  name:any[] = [];
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tableData:any[] = [...MobileDataComponent.ELEMENT_DATA, ...WebDataComponent.ELEMENT_DATA];


  dataSource = new MatTableDataSource<PeriodicElement>(this.tableData);  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;  
    this.name = this.tableData;
    // console.log(typeof this.tableData);
    // for(var i =0; i <this.tableData.length; i++){
    //   this.name = this.tableData;
    //   console.log("Name : "+this.name);
      
    // }

    
    // this.tableData.forEach((element, i) => {
    //   this.name = element.symbol;
    //    console.log("symbol", (this.name));
    // });
  
  }



}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


