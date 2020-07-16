import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  private subject = new Subject<any>();

  sendEvent(name: string) {
    this.subject.next({ name: name });
  }

  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }

}
