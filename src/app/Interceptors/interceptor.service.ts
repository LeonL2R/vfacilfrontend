import { HttpInterceptor,HttpEvent, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError}from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept (req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    const headers = new HttpHeaders ({
      'token-usuario': 'ABCTERREER1234567'
    });
    const reqClone = req.clone({
      headers
    });
    return next.handle(reqClone).pipe(
      catchError(this.manejaError)
    );
  }
  manejaError(error: HttpErrorResponse){
    console.log('Sucedio un error');
    console.log('Registro en el log file');
    console.warn(error);
    return throwError('Error del aplicativo personal')
  };
}
