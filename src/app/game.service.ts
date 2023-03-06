import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class GameService {

  public playerChoice: Subject<any>
  public playerChoice$: Observable<any>

  constructor() {
    this.playerChoice = new Subject();
    this.playerChoice$ = this.playerChoice.asObservable();
  }
}
