import { Injectable } from '@angular/core';
import { Router} from '@angular/router'; //, ActivatedRouteSnapshot CanActivate,
import { EventDataService } from './event-data.service';


@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService  {
  // implements CanActivate

  constructor(private eventService: EventDataService, private router: Router) { }

  // canActivate(route: ActivatedRouteSnapshot) {
  //   const eventExists = !!this.eventService.getEvent(+route.params['id']);
  //   if (!eventExists) {
  //     this.router.navigate(['/404']);
  //   }
  //   return eventExists;
  // }
 }
