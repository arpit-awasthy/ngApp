import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token: string = "12345";
  req = req.clone({
    setHeaders: {authrorization: `breaer ${token}` }
  })
  return next(req).pipe(catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {
          // handle unauthorized (redirect to login)
        } else if (error.status === 500) {
          // handle server error
        }

        return throwError(() => error);
      })
)};
