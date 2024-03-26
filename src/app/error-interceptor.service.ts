import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP error occurred:', error);
        if (error.status === 403) {
          console.error('Forbidden error occurred:', error);
          // Display a custom message to the end-user using MatSnackBar
          this.snackBar.open('Access Forbidden', 'Dismiss', {
            duration: 5000, // Set the duration for the snackbar to be displayed
            verticalPosition: 'top', // Position the snackbar at the top of the screen
          });
        }
        if (error.status === 0) {
          console.error('Service is shut down:', error);
          // Display a custom message to the end-user using MatSnackBar
          this.snackBar.open('Serivce is shut down currently', 'Dismiss', {
            duration: 5000, // Set the duration for the snackbar to be displayed
            verticalPosition: 'top', // Position the snackbar at the top of the screen
          });
        }
        if (error.status === 400) {
          console.error('User Is not available', error);
          // Display a custom message to the end-user using MatSnackBar
          this.snackBar.open('Sorry!! User Is not avialable pls do sigUp!', 'Dismiss', {
            duration: 5000, // Set the duration for the snackbar to be displayed
            verticalPosition: 'top', // Position the snackbar at the top of the screen
          });
        }
        
        return throwError(error);
      })
    );
  }
}
