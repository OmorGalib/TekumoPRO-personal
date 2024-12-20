import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';
import { CreateOrderComponent } from './create-order/create-order.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'practice', component: PracticeComponent },
    { path: 'create-order', component: CreateOrderComponent },
];
