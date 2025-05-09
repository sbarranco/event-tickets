import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventInfo } from '../../features/events/models/event.model';
import { SessionItem } from '../../features/events/models/session.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<EventInfo[]>(
    this.loadCartFromStorage()
  );
  cartItems$ = this.cartItemsSubject.asObservable();

  getCartItems(): EventInfo[] {
    return this.cartItemsSubject.getValue();
  }

  setCartItems(cartItems: EventInfo[]): void {
    this.cartItemsSubject.next(cartItems);
    this.saveCartToStorage();
  }

  addSession(eventInfo: EventInfo, session: SessionItem): void {
    const currentCart = this.getCartItems();
    const eventIndex = currentCart.findIndex(
      (item) => item.event.id === eventInfo.event.id
    );

    if (eventIndex !== -1) {
      const existingEvent = currentCart[eventIndex];
      const sessionIndex = existingEvent.sessions.findIndex(
        (s) => s.date === session.date
      );

      if (sessionIndex !== -1) {
        const existingSession = existingEvent.sessions[sessionIndex];
        existingSession.selected = Math.min(
          existingSession.selected! + 1,
          existingSession.availability
        );
      } else {
        session.selected = 1;
        existingEvent.sessions.push(session);
      }
    } else {
      session.selected = 1;
      currentCart.push({
        event: eventInfo.event,
        sessions: [session],
      });
    }

    this.setCartItems(currentCart);
  }

  removeSession(eventId: string, sessionDate: string): void {
    const currentCart = this.getCartItems();
    const eventIndex = currentCart.findIndex(
      (item) => item.event.id === eventId
    );

    if (eventIndex !== -1) {
      const existingEvent = currentCart[eventIndex];
      const sessionIndex = existingEvent.sessions.findIndex(
        (session) => session.date === sessionDate
      );

      if (sessionIndex !== -1) {
        const session = existingEvent.sessions[sessionIndex];

        if (session.selected && session.selected > 0) {
          session.selected--;

          if (session.selected === 0) {
            existingEvent.sessions.splice(sessionIndex, 1);
            if (existingEvent.sessions.length === 0) {
              currentCart.splice(eventIndex, 1);
            }
          }
        }
        this.setCartItems(currentCart);
      }
    }
  }

  private loadCartFromStorage(): EventInfo[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }

  private saveCartToStorage(): void {
    localStorage.setItem(
      'cart',
      JSON.stringify(this.cartItemsSubject.getValue())
    );
  }
}
