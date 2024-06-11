import { Routes } from '@angular/router';
import { BookingHistoryComponent } from './booking-history/booking-history.component';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'customer/booking-history',
    pathMatch: 'full'
  },
  {
    path: 'customer/booking-history',
    component: BookingHistoryComponent
  }
];
