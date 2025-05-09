import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { EventInfo, EventItem } from '../models/event.model';
import { StateService } from '../../../core/services/state.service';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private readonly http = inject(HttpClient);
  private readonly stateService = inject(StateService);

  getEvents(): Observable<EventItem[]> {
    const url = '/assets/data/events.json';
    this.stateService.setLoading(true);
    return this.http
      .get<EventItem[]>(url)
      .pipe(finalize(() => this.stateService.setLoading(false)));
  }

  getEventInfo(eventId: string): Observable<EventInfo> {
    const url = `/assets/data/event-info-${eventId}.json`;
    this.stateService.setLoading(true);
    return this.http
      .get<EventInfo>(url)
      .pipe(finalize(() => this.stateService.setLoading(false)));
  }
}
