import { HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req, next: HttpHandlerFn) => {
  console.log('desde el interceptor TOKEN');
  //obtener token del localstorage
  const token = localStorage.getItem('token');
  if (token) {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(modifiedReq);
  } else {
    return next(req);
  }
};
