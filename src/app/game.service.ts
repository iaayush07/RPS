import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class GameService {

  public playerChoice: BehaviorSubject<any>;
  public playerChoice$: Observable<any>;

  public computerChoice: BehaviorSubject<any>;
  public computerChoice$: Observable<any>;

  constructor() {
    this.playerChoice = new BehaviorSubject('');
    this.playerChoice$ = this.playerChoice.asObservable();

    this.computerChoice = new BehaviorSubject('');
    this.computerChoice$ = this.computerChoice.asObservable();
  }
}
