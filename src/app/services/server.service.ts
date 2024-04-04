import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addUser(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, formData);
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUserWithid(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }

  updateUser(id: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, updatedData);
  }

  deleteDetails(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
}
