import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventsService } from '../../services/event.service';
import { Observable } from 'rxjs';
import { EventInfo, EventItem } from '../../models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class EventDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private eventsService = inject(EventsService);
  private router = inject(Router);

  event$!: Observable<EventInfo>;

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id') || '';
    this.event$ = this.eventsService.getEventInfo(eventId);
  }

  onBack(): void {
    this.router.navigate(['events']);
  }
}
