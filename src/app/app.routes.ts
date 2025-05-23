import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  {
    path: 'events',
    loadComponent: () =>
      import(
        './features/events/pages/event-catalog/event-catalog.component'
      ).then((m) => m.EventCatalogComponent),
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import(
        './features/events/pages/event-detail/event-detail.component'
      ).then((m) => m.EventDetailComponent),
  },
  { path: '**', redirectTo: 'events' },
];
