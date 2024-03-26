import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationRequest } from './AuthenticationRequest';
import { ContactService } from './contact.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    authenticationRequest: AuthenticationRequest = new AuthenticationRequest("","");
    message: string = "";
  
    constructor(private contactService: ContactService, private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot  ): boolean |Observable<boolean> |Promise<boolean> {
    {
        const authToken = this.contactService.getTokenFromSession();

        if(authToken==null){
            // Navigate to another route after receiving the token
            this.router.navigate(['login']); 
            return false;


        }
        else
        return true;
       
}

  }
}

//this code from angular 15 onwards
/*export const CanActivate = () => {
    const contactService = inject(ContactService);
    const router = inject(Router);

    const authToken = contactService.getTokenFromSession();

    if(authToken==null){
        // Navigate to another route after receiving the token
        router.navigate(['login']); 
        return false;


    }
    else
    return true;
}*/