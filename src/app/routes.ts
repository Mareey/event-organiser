import {Routes} from '@angular/router';
import {EventListComponent} from './event/event-list.component';
import {EventDetailsComponent} from './event/event-details/event-details.component';
import {CreateEvetsComponent} from './event/create-evets.component';
import {ErrorsComponent} from './errors/errors.component';
// import {EventRouteActivatorService} from './event/shared/event-route-activator.service';
import {EventRouteDeactivatorService } from './event/shared/event-route-deactivator.service';
import { EventListResolverService } from './event/shared/event-list-resolver.service';
import { CreateSessionComponent } from './event/event-details/create-session.component';
import {EventResolverService} from './event/shared/event-resolver.service';


export const appRoutes: Routes  = [
  {path : 'events/new', component : CreateEvetsComponent, canDeactivate: [EventRouteDeactivatorService ]},
  {path : 'events', component:  EventListComponent, resolve : {events: EventListResolverService}},
  {path : 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolverService}},
   //canActivate: [EventRouteActivatorService
  {path : 'events/session/new', component : CreateSessionComponent},
  {path : 'user', loadChildren: './user/user.module#UserModule'},
  {path : '', redirectTo : '/events', pathMatch : 'full'},
  {path : '404', component : ErrorsComponent},
  {path : '**', redirectTo : '/events', pathMatch : 'full' }

]
