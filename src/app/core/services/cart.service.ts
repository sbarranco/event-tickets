import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  private http = inject(HttpService);
  private stateService = inject(StateService);

  getCartItems(): Observable<any[]> {
    return this.cartItems.asObservable();
  }

  addToCart(sessionId: string, quantity: number): void {
    this.stateService.setLoading(true);
    const url = `/api/cart/add`;
    const body = { sessionId, quantity };

    this.http.post(url, body).subscribe({
      next: () => {
        const currentCart = this.cartItems.value;
        const existingItem = currentCart.find(
          (item) => item.sessionId === sessionId
        );

        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          currentCart.push({ sessionId, quantity });
        }

        this.cartItems.next(currentCart);
        this.stateService.setLoading(false); // Desactivar indicador de carga
      },
      error: () => {
        this.stateService.setLoading(false); // Desactivar indicador de carga en caso de error
      },
    });
  }

  // Eliminar una localidad del carrito
  removeFromCart(sessionId: string): void {
    this.stateService.setLoading(true); // Activar indicador de carga
    const url = `/api/cart/remove`; // URL ficticia para la API
    const body = { sessionId };

    this.http.post(url, body).subscribe({
      next: () => {
        const updatedCart = this.cartItems.value.filter(
          (item) => item.sessionId !== sessionId
        );
        this.cartItems.next(updatedCart);
        this.stateService.setLoading(false); // Desactivar indicador de carga
      },
      error: () => {
        this.stateService.setLoading(false); // Desactivar indicador de carga en caso de error
      },
    });
  }
}
