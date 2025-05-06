import { Component, input, output } from '@angular/core';
import { EventItem } from '../../models/event.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  imports: [CommonModule, ButtonComponent],
})
export class EventCardComponent {
  event = input.required<EventItem>();
  clickCard = output<string>();
  isMediumOrLargeScreen: any;
}
