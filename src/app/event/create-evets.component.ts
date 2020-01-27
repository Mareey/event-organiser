import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EventDataService} from './shared/event-data.service';


@Component({
  selector: 'app-create-evets',
  templateUrl: './create-evets.component.html',
  styleUrls: ['./create-evets.component.css']
})
export class CreateEvetsComponent implements OnInit {

  newEvent: any;

  constructor(private router: Router, private eventService: EventDataService) { }

  isDirty: boolean = true;

  ngOnInit() {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
