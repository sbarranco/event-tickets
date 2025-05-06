import { SessionItem } from './session.model';

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  place: string;
  startDate: number;
  endDate: string;
  description: number;
}

export interface EventSummary
  extends Pick<EventItem, 'id' | 'title' | 'subtitle' | 'image'> {}

export interface EventInfo {
  event: EventSummary;
  sessions: SessionItem[];
}
