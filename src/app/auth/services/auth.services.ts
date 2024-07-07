import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseInterface } from '../../shared/models/api.models';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  sendResetPasswordLink(email: string): Observable<ApiResponseInterface<any>> {
    const url = 'http://localhost:3000/sendResetPasswordLink'; // Specify the full URL with protocol
    const payload = { email };

    return this.http.post<ApiResponseInterface<any>>(url, payload);
  }

  resetPassword(
    data: object,
    token: string
  ): Observable<ApiResponseInterface<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
      withCredentials: true,
    };

    document.cookie = `Authorization=${token}`;
    const url = 'http://localhost:3000/resetPassword';

    const payload = data;

    return this.http.post<ApiResponseInterface<any>>(url, payload, options);
  }
}
