import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class GameService {

  public playerChoice: BehaviorSubject<any>;
  public playerChoice$: Observable<any>;

  public computerChoice: BehaviorSubject<any>;
  public computerChoice$: Observable<any>;

  public winnerPlayer: ReplaySubject<any>;
  public winnerPlayer$: Observable<any>;

  constructor() {
    this.playerChoice = new BehaviorSubject('');
    this.playerChoice$ = this.playerChoice.asObservable();

    this.computerChoice = new BehaviorSubject('');
    this.computerChoice$ = this.computerChoice.asObservable();

    this.winnerPlayer = new ReplaySubject();
    this.winnerPlayer$ = this.winnerPlayer.asObservable();
  }
}
