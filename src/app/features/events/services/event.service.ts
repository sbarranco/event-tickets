import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventInfo, EventItem } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private readonly http = inject(HttpClient);

  getEvents(): Observable<EventItem[]> {
    const url = '/assets/data/events.json';
    return this.http.get<EventItem[]>(url);
  }

  getEventInfo(eventId: string): Observable<EventInfo> {
    const url = `/assets/data/event-info-${eventId}.json`;
    return this.http.get<EventInfo>(url);
  }
}
