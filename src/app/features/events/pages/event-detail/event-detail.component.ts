import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class EventDetailComponent {
  events = [
    { id: 1, name: 'Music Concert', date: '2023-11-01', location: 'New York' },
    { id: 2, name: 'Art Exhibition', date: '2023-11-15', location: 'Paris' },
    {
      id: 3,
      name: 'Tech Conference',
      date: '2023-12-05',
      location: 'San Francisco',
    },
  ];
}
