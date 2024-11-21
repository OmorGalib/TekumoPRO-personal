import { Component, OnInit, Renderer2} from '@angular/core';
import { DataService } from '../services/data.service';
import { PeriodicElement } from '../interfaces/periodic-element.model';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule, 
    MatTableModule, 
    HeaderComponent, 
    SubHeaderComponent,
    AgGridModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSourceActive: PeriodicElement[] = [];
  dataSourceNearingMilestone: PeriodicElement[] = [];
  dataSourceOpenIssues: PeriodicElement[] = [];
  dataSourceCompletedOrders: PeriodicElement[] = [];

  activeCount = 0;
  nearingMilestoneCount = 0;
  openIssuesCount = 0;
  completedOrdersCount = 0;

  columnDefs: ColDef[]  = [
    { field: 'position', headerName: 'No.', sortable: true, filter: true },
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'weight', headerName: 'Weight', sortable: true, filter: true },
    { field: 'symbol', headerName: 'Symbol', sortable: true, filter: true },
  ];

  defaultColDef = {
    flex: 1,
    resizable: true,
    sortable: true,
    filter: true,
  };

  isTableActiveLoading = false;
  isTableMilestoneLoading = false;
  isTableIssuesLoading = false;
  isTableCompleteLoading = false;

  constructor(private dataService: DataService, private renderer: Renderer2) {}

  ngOnInit(): void {
    forkJoin({
      activeOrders: this.dataService.getActiveOrders(),
      nearingMilestone: this.dataService.getNearingMilestone(),
      openIssues: this.dataService.getOpenIssues(),
      completedOrders: this.dataService.getCompletedOrders(),
    }).subscribe({
      next: (data) => {
        this.dataSourceActive = data.activeOrders;
        this.dataSourceNearingMilestone = data.nearingMilestone;
        this.dataSourceOpenIssues = data.openIssues;
        this.dataSourceCompletedOrders = data.completedOrders;

        this.activeCount = data.activeOrders.length;
        this.nearingMilestoneCount = data.nearingMilestone.length;
        this.openIssuesCount = data.openIssues.length;
        this.completedOrdersCount = data.completedOrders.length;
      },
      error: (err) => console.error('Error loading data:', err),
    });
  }
    
  onTableActiveScroll(): void {
    this.isTableActiveLoading = true;
    setTimeout(() => {
      this.isTableActiveLoading = false;
    }, 1000);
  }
  onTableMilestoneScroll(): void {
    this.isTableMilestoneLoading = true;
    setTimeout(() => {
      this.isTableMilestoneLoading = false;
    }, 1000);
  }
  onTableIssuesScroll(): void {
    this.isTableIssuesLoading = true;
    setTimeout(() => {
      this.isTableIssuesLoading = false;
    }, 1000);
  }
  onTableCompleteScroll(): void {
    this.isTableCompleteLoading = true;
    setTimeout(() => {
      this.isTableCompleteLoading = false;
    }, 1000);
  }
}
