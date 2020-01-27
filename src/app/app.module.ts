import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { NavComponent } from './event/shared/nav.component';
import { EventListComponent } from './event/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import {appRoutes} from './routes';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CreateEvetsComponent } from './event/create-evets.component';
import { ErrorsComponent } from './errors/errors.component';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './event/event-details/create-session.component';
import { SessionListComponent } from './event/event-details/session-list.component';
import { DurationPipe } from './event/shared/duration.pipe';
import {JQ_TOKEN, TOASTR_TOKEN, ToastrService, CollapsibleWellComponent, SimpleModalComponent} from './common/index';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './event/event-details/upvote.component';
import { LocationValidatorDirective } from './event/shared/location-validator.directive';


let toastr: ToastrService = window['toastr'];
let jQuery = window['$'];
@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NavComponent,
    EventListComponent,
    EventDetailsComponent,
    CreateEvetsComponent,
    ErrorsComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective,
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    HttpClientModule
  ],
  providers: [{provide: TOASTR_TOKEN, useValue: toastr}, {provide: JQ_TOKEN, useValue: jQuery}],
  bootstrap: [AppComponent]
})
export class AppModule { }

