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
    console.log(this.computerChoice, 'computer');
    ;
  }

  playerChoiceee(item: string) {
    this.currentPlayerChoice = item;
    this.gameService.playerChoice.next(this.currentPlayerChoice);
    console.log(this.currentPlayerChoice, 'player');
    this.createComputerChoice();
    this.winner();
  }

  winner() {
    if ((this.currentPlayerChoice === 'rock' && this.computerChoice === 'scissors') ||
      (this.currentPlayerChoice === 'paper' && this.computerChoice === 'rock') ||
      (this.currentPlayerChoice === 'scissors' && this.computerChoice === 'paper')) {
      this.winningPlayer = 'player'
      console.log('Player wins!');
    } else if
      (this.computerChoice === this.currentPlayerChoice) {
      this.winningPlayer = 'Draw'
      console.log('Tie!');
    } else {
      console.log('Computer wins!');
      this.winningPlayer = 'computer'
    }
  }
}
