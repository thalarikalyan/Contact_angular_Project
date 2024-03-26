import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from '../contact.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableExporterDirective } from 'mat-table-exporter';

@Component({
  selector: 'app-export-contact-details',
  templateUrl: './export-contact-details.component.html',
  styleUrl: './export-contact-details.component.css'
})
export class ExportContactDetailsComponent implements OnInit {

 displayedColumns: string[] = ['contactId', 'contactName', 'contactEmail', 'contactNum', 'activesw', 'roles'];
 dataSource:any = new MatTableDataSource<any>();
 contacts:any="";
 
 @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
 @ViewChild(MatSort, { static: true }) sort!: MatSort;
 @ViewChild(MatTableExporterDirective) exporter!: MatTableExporterDirective;
 
constructor(private contactService:ContactService){}

ngOnInit(): void {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort=this.sort;
  this.viewContactDetails();
   
  }
  viewContactDetails(){
    let response=this.contactService.getContactDetails();
    response.subscribe(
      data=>this.dataSource.data=data
      
    );
    this.dataSource.paginator = this.paginator; 
    
  }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


}
