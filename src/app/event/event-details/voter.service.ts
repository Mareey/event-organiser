import { Injectable } from '@angular/core';
import { Isession } from '../shared/event-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  deleteVoter(eventId: number, session: Isession, voterName: string) {
    session.voters = session.voters.filter(voter =>  voter !== voterName );
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url).pipe(catchError(this.handleError('deleteVoter'))).subscribe();
  }

  addVoter(eventId: number, session: Isession, voterName: string) {
    session.voters.push(voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = { headers: new HttpHeaders({'Content-Type': '/application/json'})};
    this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter'))).subscribe();
  }

  userHasVoted(session: Isession, voterName: string) {
     return session.voters.some(voter => voter ===  voterName);
  }
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
