import { Component, OnInit } from '@angular/core';
import { Contacts } from '../Contacts';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrl: './contactedit.component.css'
})
export class ContacteditComponent implements OnInit {
loginContact() {
throw new Error('Method not implemented.');
}

  contact:Contacts=new Contacts(0,"","",0,"","","");
  id:number=0; 
  message:string="" 
authenticationRequest: any;
  constructor(private contactService:ContactService,
    private router:Router,private activeRouter:ActivatedRoute) { }

    ngOnInit(): void {
      this.getContact();
    }

  getContact(){
    this.id=this.activeRouter.snapshot.params['id'];
    console.log("UPDATED ID ::"+this.id);
    this.contactService.findContactById(this.id).subscribe(
      data=>{
        console.log("GETTING A CONTACT..");
        console.log(data);
        this.contact=data;
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
        console.log(error);  
      }
    );
  }
  updateContact(){
      let response=this.contactService.insertContactDetails(this.contact);
      response.subscribe(data=>this.message=data);
      this.router.navigate(['updaterecord']);

  }
 

}

