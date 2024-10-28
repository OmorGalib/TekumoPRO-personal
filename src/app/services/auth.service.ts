// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // Method to get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Method to authenticate a user
  authenticate(username: string, password: string): Observable<User | undefined> {
    return new Observable<User | undefined>((observer) => {
      this.getUsers().subscribe((users) => {
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
        observer.next(user);
        observer.complete();
        console.log("userssss",user)
      });
    });
  }
}
