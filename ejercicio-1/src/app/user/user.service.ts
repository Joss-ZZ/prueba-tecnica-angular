import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ApiResponse } from './interfaces/api-response';
import { User } from './interfaces/user';
import { UserList } from './interfaces/userList';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dataUrl = 'assets/data.json';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<UserList[]> {
    return this.httpClient.get<ApiResponse<User[]>>(this.dataUrl).pipe(
      map(res => {
        return res.data.map(user => {
          return {
            nombres: `${user.nombre}, ${user.apellidos}`,
            saldoDisponible: user.ingresosMes - user.gastosMes
          }
        })
      }),
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('error:', error);
    return throwError('Ha ocurrido un error.');
  }
}
