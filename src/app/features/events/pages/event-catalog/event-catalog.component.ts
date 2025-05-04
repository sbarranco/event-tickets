import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../services/event.service';
import { map, Observable } from 'rxjs';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-catalog',
  templateUrl: './event-catalog.component.html',
  styleUrls: ['./event-catalog.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class EventCatalogComponent {
  private eventsService = inject(EventsService);
  events$!: Observable<Event[]>;
  isMediumOrLargeScreen: any;

  ngOnInit(): void {
    this.events$ = this.eventsService
      .getEvents()
      .pipe(
        map((events) =>
          events.sort((a, b) => Number(a.endDate) - Number(b.endDate))
        )
      );
  }
}
