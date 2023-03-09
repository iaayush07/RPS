import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GameService } from 'src/app/game.service';

@Injectable()
export class WinnerPresenterService implements OnInit {
  public winningPlayer: string;
  constructor(private gameService: GameService) {
    this.winningPlayer = '';
  }

  ngOnInit(): void {

  }

  winner(playerChoice: any, computerChoice: any) {
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')) {
      this.winningPlayer = 'player'
      // console.log('Player wins!');
    } else if
      (computerChoice === playerChoice) {
      this.winningPlayer = 'draw'
      // console.log('Tie!');
    } else {
      this.winningPlayer = 'computer'
      // console.log('Computer wins!')
    }
    // console.log(this.winningPlayer, 787);
    this.gameService.winnerPlayer.next(this.winningPlayer);
  }
}
