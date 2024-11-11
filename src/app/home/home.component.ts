import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PeriodicElement } from '../interfaces/periodic-element.model';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { HeaderComponent } from "../header/header.component";
import { SubHeaderComponent } from "../sub-header/sub-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatTableModule, HeaderComponent, SubHeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSourceActive: PeriodicElement[] = [];
  dataSourceNearingMilestone: PeriodicElement[] = [];
  dataSourceOpenIssues: PeriodicElement[] = [];
  dataSourceCompletedOrders: PeriodicElement[] = [];

  // Counters for each section
  activeCount = 0;
  nearingMilestoneCount = 0;
  openIssuesCount = 0;
  completedOrdersCount = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Using forkJoin to fetch all data sources concurrently
    forkJoin({
      activeOrders: this.dataService.getActiveOrders(),
      nearingMilestone: this.dataService.getNearingMilestone(),
      openIssues: this.dataService.getOpenIssues(),
      completedOrders: this.dataService.getCompletedOrders(),
    }).subscribe({
      next: (data) => {
        // Assign data to the respective data sources
        this.dataSourceActive = data.activeOrders;
        this.dataSourceNearingMilestone = data.nearingMilestone;
        this.dataSourceOpenIssues = data.openIssues;
        this.dataSourceCompletedOrders = data.completedOrders;

        // Set counts for display
        this.activeCount = data.activeOrders.length;
        this.nearingMilestoneCount = data.nearingMilestone.length;
        this.openIssuesCount = data.openIssues.length;
        this.completedOrdersCount = data.completedOrders.length;
      },
      error: (err) => console.error('Error loading data:', err)
    });
  }
}
