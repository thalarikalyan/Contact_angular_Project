export class Contacts {
    contactId:number;
	contactName:string;
	contactEmail:string;
	contactNum:number;
    activesw:string;
    password:string;
    roles:string;
    constructor(contactId:number,contactName:string,contactEmail:string,contactNum:number,activesw:string,password:string,roles:string){
        this.contactId=contactId;
        this.contactName=contactName;
        this.contactEmail=contactEmail;
        this.contactNum=contactNum;
        this.activesw=activesw;
        this.password=password;
        this.roles=roles;
    }
}
