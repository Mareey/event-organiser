import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../user/auth.service';
import { EventDataService } from './event-data.service';
import { Isession, IEventInfo } from './event-info';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: Isession[];
  events = [];

  constructor(public auth: AuthService, private eventService: EventDataService) {}

  // onSearch() {
  //   $('id').modal()
  // }

  ngOnInit() {

  }

  getEvents() {
    this.eventService.getEventData().subscribe((event) => {
      for(let i = 0; i < event.length; i++ ) {
        this.events.push(event[i].name);
    }
  });
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
