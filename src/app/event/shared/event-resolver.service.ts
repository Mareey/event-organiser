import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {EventDataService} from './event-data.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }

  constructor(private eventService: EventDataService) { }
}
