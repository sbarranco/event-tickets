import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { EventsService } from '../../services/event.service';
import { map, Observable } from 'rxjs';
import { EventItem } from '../../models/event.model';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-event-catalog',
  templateUrl: './event-catalog.component.html',
  styleUrls: ['./event-catalog.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    EventCardComponent,
    EmptyStateComponent,
  ],
})
export class EventCatalogComponent {
  private eventsService = inject(EventsService);
  private router = inject(Router);
  events$!: Observable<EventItem[]>;
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

  onClickCardEvent(id: string): void {
    this.router.navigate(['/events', id]);
  }
}
