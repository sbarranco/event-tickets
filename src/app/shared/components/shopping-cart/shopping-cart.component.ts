import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { EventInfo } from '../../../features/events/models/event.model';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  imports: [CommonModule, OrderByPipe, EmptyStateComponent],
})
export class ShoppingCartComponent implements OnInit {
  cartItems = input<EventInfo[]>();
  removeSession = output<{ eventId: string; sessionDate: string }>();

  ngOnInit(): void {
    console.log('cartItems', this.cartItems());
  }

  onRemoveSession(eventId: string, sessionDate: string): void {
    this.removeSession.emit({ eventId, sessionDate });
  }
}
