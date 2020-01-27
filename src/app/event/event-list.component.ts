import { Component, OnInit } from '@angular/core';
import { EventDataService } from './shared/event-data.service';
import {ActivatedRoute} from '@angular/router';
import { IEventInfo } from './shared/event-info';

declare let toastr;

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: IEventInfo[];

  constructor(private eventService: EventDataService,
              private  route: ActivatedRoute) {}

  ngOnInit() {

    this.events = this.route.snapshot.data['events'];
  //  this.eventService.getEventData().subscribe(events => {
  //   this.events = events;
  //  });

  }

  // handleAppEventClick(eventName) {
  //   this.toastrService.success(eventName);
  // }

}
