import { Component, OnInit, Input } from '@angular/core';
import { IEventInfo } from './shared/event-info';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: IEventInfo[];

  constructor() { }

  ngOnInit() {
  }

}
