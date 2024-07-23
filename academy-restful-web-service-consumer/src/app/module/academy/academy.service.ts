import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { AcademyServiceI } from './academyI.service';

@Injectable({
  providedIn: 'root'
})
export class AcademyService implements AcademyServiceI {

  constructor(private httpClient: HttpClient) { }

  //get @RequestMappimg -> URL del servizio
  private apiUrl = "http://localhost:8080/rest/api/academies";

  //chimata rest GET verso URL inserito
  getAcademies(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
      .pipe(
        catchError(this.exeptionHandler)
      );
    }

    //@GetMapping("/code/{code}")
    getAccademyByCode(code: string): Observable<any> {
      return this.httpClient.get(this.apiUrl + '/code/' + code)
        .pipe(
          catchError(this.exeptionHandler)
        );
    }

   // @PostMapping
    saveAcademy(academy: any): Observable<any> {
      return this.httpClient.post(this.apiUrl, JSON.stringify(academy), this.httpOptions)
        .pipe(
          catchError(this.exeptionHandler)
        );
    }

    //@PutMapping
    updateAcademy(academy: any): Observable<any> {
      return this.httpClient.put(this.apiUrl, JSON.stringify(academy), this.httpOptions)
        .pipe(
          catchError(this.exeptionHandler)
        );
    }

    //@DeleteMapping("/code/{code}")
    deleteAcademy(code: string): Observable<any> {
      return this.httpClient.delete(this.apiUrl + '/code/' + code)
        .pipe(
          catchError(this.exeptionHandler)
        );
    }

    getAcademyByCode(code: string): Observable<any> {
      return this.httpClient.get(this.apiUrl + '/code/' + code)
        .pipe(
          catchError(this.exeptionHandler)
        );
    }


  //richiamare il file json -> comunicherano attraverso  JSON
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  //get exeption
  exeptionHandler(exeption: any) {
    let errorMessage = '';
    if (exeption.error instanceof ErrorEvent) {
      errorMessage = `Error: ${exeption.error.message}`;
    } else {
      errorMessage = `Error Code: ${exeption.status}\nMessage: ${exeption.message}`;
    }
    window.alert(errorMessage);
    return errorMessage;
  }
}
