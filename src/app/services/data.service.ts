import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../interfaces/periodic-element.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getActiveOrders(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>('../../assets/json/active-orders.json');
  }

  getNearingMilestone(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>('../../assets/json/nearing-milestone.json');
  }

  getOpenIssues(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>('../../assets/json/open-issues.json');
  }

  getCompletedOrders(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>('../../assets/json/completed-orders.json');
  }
}
