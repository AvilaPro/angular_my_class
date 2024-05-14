import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  let router = new Router();
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
      if(event.status == 204){
        router.navigate(['/login']);
      }
    }
  }));
};
