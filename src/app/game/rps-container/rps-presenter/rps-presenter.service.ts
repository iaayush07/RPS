import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GameService } from 'src/app/game.service';

@Injectable()
export class RpsPresenterService {

  public computerChoice: string;
  public currentPlayerChoice: string;
  public winningPlayer: string;
  public choices: any;

  constructor(private gameService: GameService) {
    this.computerChoice = '';
    this.currentPlayerChoice = '';
    this.winningPlayer = '';
    this.choices = ['rock', 'paper', 'scissors'];
  }

  createComputerChoice() {
    this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
    this.gameService.computerChoice.next(this.computerChoice);
    // console.log(this.computerChoice, 'computer');
    ;
  }

  playerChoiceee(item: string) {
    this.currentPlayerChoice = item;
    this.gameService.playerChoice.next(this.currentPlayerChoice);
    // console.log(this.currentPlayerChoice, 'player');
    this.createComputerChoice();
    // this.winner();
  }


}
