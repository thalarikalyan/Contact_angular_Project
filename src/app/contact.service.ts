import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacts } from './Contacts';
import { Observable, tap } from 'rxjs';
import { AuthenticationRequest } from './AuthenticationRequest';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

public authToken: any | undefined;

  constructor(private httpClient:HttpClient) { }

  // Method to save token to session storage
  saveTokenToSession(token: string): void {
    sessionStorage.setItem('token', token);
  }

  // Method to retrieve token from session storage
  getTokenFromSession(): string | null {
    return sessionStorage.getItem('token');
  }

  insertContactDetails(contact:Contacts):Observable<string>{
  return this.httpClient.post("http://localhost:9898/contact/save", contact, { responseType: "text" })
  }

  loginContactDetails(authenticationRequest:AuthenticationRequest):Observable<string>{
    return this.httpClient.post("http://localhost:9898/contact/login", authenticationRequest, { responseType: "text" })
    .pipe(
          tap((token: string) => {
            this.saveTokenToSession(token);
            this.authToken = token; // Set the received token to authToken variable
          })
        );

 }
 getContactDetails():Observable<Contacts[]>{
    
  if (!this.authToken) {
    throw new Error('No token available.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.authToken}`
  });

  return this. httpClient.get<Contacts[]>("http://localhost:9898/contact/getAllContactDetails",{ headers})

}

findContactById(contactId: number): Observable<Contacts> {

  if (!this.authToken) {
    throw new Error('No token available.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.authToken}`
  });
  const url = `http://localhost:9898/contact/getContById/${contactId}`;
  return this.httpClient.get<Contacts>(url, {headers});
}

deleteContactByid(contactid:number):Observable<string>{
  if (!this.authToken) {
    throw new Error('No token available.');
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.authToken}`
  });
  return this.httpClient.delete<string>(`http://localhost:9898/contact/deleteContById/${contactid}`, { headers}).pipe(
    tap((success: string) => {
   return success='Deleted'
    })
  );
}

}
