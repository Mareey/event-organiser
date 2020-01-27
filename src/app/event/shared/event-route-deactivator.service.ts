import { Injectable } from '@angular/core';
import {CreateEvetsComponent} from '../create-evets.component';


@Injectable({
  providedIn: 'root'
})
export class EventRouteDeactivatorService {

  constructor() { }

  canDeactivate(component: CreateEvetsComponent) {
    if (component.isDirty) {
      return window.confirm('You have not saved changes made. Do you really want to cancel?');
    }
    return true;
  }

}
