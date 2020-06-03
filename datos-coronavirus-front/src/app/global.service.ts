import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private baseUrl = 'http://127.0.0.1:8080/datos-coronavirus-back-0.0.1-SNAPSHOT/api/summary/';

    constructor(private http: HttpClient) { }

  getGlobal(): Observable<any>{
    return this.http.get(`${this.baseUrl}`).pipe(retry(3), catchError(this.handleError));
  }

  getCountrySummary(): Observable<any>{
    return this.http.get(`${this.baseUrl}` + 'countries').pipe(retry(3), catchError(this.handleError));
  }

  getCountryNames(): Observable<any>{
    return this.http.get(`${this.baseUrl}` + 'country-names').pipe(retry(3), catchError(this.handleError));
  }

  getCountryDayOne(countrySlug: String): Observable<any>{
    return this.http.get(`${this.baseUrl}` + 'day-one/' + `${countrySlug}`).pipe(retry(3), catchError(this.handleError));
  }

  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      
      console.error('Ocurrio un error', error.error.message);
    } else {
      // El backend retornó una respuesta de error.
      // El response body puede llegar a tener pistas de qué es lo que sucedió,
      console.error(
        `Codigo retornado por el backend ${error.status}, ` +
        `response body: ${error.error}`);
    }
    // retorna un observable con una respuesta orientada al usuario.
    return throwError(
      'Ha ocurrido un error. Por favor vuelva a intentar más tarde.');
  };


}
