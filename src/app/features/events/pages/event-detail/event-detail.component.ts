import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventsService } from '../../services/event.service';
import { Observable } from 'rxjs';
import { EventInfo } from '../../models/event.model';
import { SessionItem } from '../../models/session.model';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { OrderByPipe } from '../../../../shared/pipes/order-by.pipe';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CartService } from '../../../../core/services/cart.service';
import { ShoppingCartComponent } from '../../../../shared/components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    EmptyStateComponent,
    OrderByPipe,
    ButtonComponent,
    ShoppingCartComponent,
  ],
})
export class EventDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private eventsService = inject(EventsService);
  private router = inject(Router);
  private cartService = inject(CartService);

  event$!: Observable<EventInfo>;
  cartItems$!: Observable<EventInfo[]>;
  selectedMap: { [key: string]: number } = {};

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id') || '';
    this.event$ = this.eventsService.getEventInfo(eventId);
    this.cartItems$ = this.cartService.cartItems$;

    this.cartItems$.subscribe((cartItems) => {
      this.updateSelectedMap(cartItems);
    });
  }

  onBack(): void {
    this.router.navigate(['events']);
  }

  increaseSelection(session: SessionItem, eventInfo: EventInfo): void {
    if (session.selected === null || session.selected === undefined) {
      session.selected = 0;
    }
    if (session.selected < session.availability) {
      this.cartService.addSession(eventInfo, session);
    }
  }

  decreaseSelection(session: SessionItem, eventInfo: EventInfo): void {
    if (session.selected! > 0) {
      this.cartService.removeSession(eventInfo.event.id, session.date);
    }
  }

  removeSession(eventId: string, sessionDate: string): void {
    this.cartService.removeSession(eventId, sessionDate);
  }

  getSelectedQuantity(eventId: string, date: string): number {
    const key = `${eventId}-${date}`;
    return this.selectedMap[key] || 0;
  }

  isDecreaseDisabled(eventId: string, date: string): boolean {
    return this.getSelectedQuantity(eventId, date) <= 0;
  }

  isIncreaseDisabled(
    eventId: string,
    date: string,
    availability: number
  ): boolean {
    return this.getSelectedQuantity(eventId, date) >= availability;
  }

  private updateSelectedMap(cartItems: EventInfo[]): void {
    this.selectedMap = {};
    cartItems.forEach((event) => {
      event.sessions.forEach((session) => {
        const key = `${event.event.id}-${session.date}`;
        this.selectedMap[key] = session.selected || 0;
      });
    });
  }
}
