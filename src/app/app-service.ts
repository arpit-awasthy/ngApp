import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _httpClient = inject(HttpClient);
  private readonly url = 'https://jsonplaceholder.typicode.com/users';

  getUser(): Observable<any[]>  {
    return this._httpClient.get<any[]>(this.url)
  }
}
