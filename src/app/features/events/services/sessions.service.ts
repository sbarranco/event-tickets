import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  private cart = new BehaviorSubject<any[]>([]);

  getCart() {
    return this.cart.asObservable();
  }

  addToCart(session: any) {
    const currentCart = this.cart.value;
    this.cart.next([...currentCart, session]);
  }

  removeFromCart(sessionId: string) {
    const updatedCart = this.cart.value.filter((s) => s.id !== sessionId);
    this.cart.next(updatedCart);
  }
}
