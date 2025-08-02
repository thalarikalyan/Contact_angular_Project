import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit {

  contacts:any="";
  deleteMessage:string = "";
  disableEditButton: boolean = false;
  constructor(private contactService:ContactService,private router:Router){}
  ngOnInit(): void {
  
  this.viewContactDetails();
   
  }
  viewContactDetails(){
    let response=this.contactService.getContactDetails();
    response.subscribe(data=>this.contacts=data);
    
  }
  editContacts(id:number){
    this.router.navigate(['/edit', id]);
  }
  deleteContacts(id: number) {
    this.contactService.deleteContactByid(id).subscribe(data=>
    this.editContacts(id)
      
    );
  }



}
