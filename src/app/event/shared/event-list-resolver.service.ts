import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {EventDataService} from './event-data.service';


@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService: EventDataService) { }

  resolve() {
    return this.eventService.getEventData();
  }
}
