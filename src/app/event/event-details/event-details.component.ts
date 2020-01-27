import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../shared/event-data.service';
import {ActivatedRoute, Params} from '@angular/router';
import { IEventInfo, Isession } from '../shared/event-info';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEventInfo;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventDataService, private route: ActivatedRoute) { }

  addSessions() {
    this.addMode = true;
  }

  saveNewSession(session: Isession) {
     const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
     session.id = nextId + 1;
     this.event.sessions.push(session);
     this.eventService.saveEvent(this.event).subscribe();
     this.addMode = false;
  }

  cancelAddSession() {
     this.addMode = false;
  }

  ngOnInit() {
    // this.route.params.forEach((params: Params) => {
    //   // this.eventService.getEvent(+params['id']).subscribe((event: IEventInfo) => {
    //     this.event = this.route.snapshot.data['event'];;
    //     this.addMode = false;
    //   // });
    this.route.data.forEach((data) => {
        this.event = data['event'];
        this.addMode = false;

    });
    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
