import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { TabComponent, TabbedPaneComponent } from '../../shared';
import { Flight } from '../../shared/models/flight.model';

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [TabbedPaneComponent, TabComponent, FormsModule],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.scss'
})
export class BookingHistoryComponent {
  city = model<string>('');
  http = inject(HttpClient);
  trips = signal<Flight[]>([]);

  search() {
    const city = this.city();

    if (!city) return;

    this.find(city).subscribe({
      next: (trips) => this.trips.set(trips)
    });
  }

  find(city: string): Observable<Flight[]> {
    let url = 'http://www.angular.at/api/flight';

    let headers = new HttpHeaders().set('Accept', 'application/json');

    let params = new HttpParams().set('from', city);

    return this.http.get<Flight[]>(url, { headers, params });
  }
}
