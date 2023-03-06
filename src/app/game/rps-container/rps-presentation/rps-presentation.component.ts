import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RpsPresenterService } from '../rps-presenter/rps-presenter.service';

@Component({
  selector: 'app-rps-presentation',
  templateUrl: './rps-presentation.component.html',
  viewProviders: [RpsPresenterService]
  // styleUrls: ['./rps-presentation.component.scss']
})
export class RpsPresentationComponent {

  computerChoice: string;
  currentPlayerChoice: string;
  winningPlayer: string;

  constructor(private router: Router) {
    this.computerChoice = '';
    this.currentPlayerChoice = '';
    this.winningPlayer = '';
  }

  createComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    this.computerChoice = choices[Math.floor(Math.random() * choices.length)];
  }

  playerChoice(choice: string) {
    this.currentPlayerChoice = choice;
    this.router.navigateByUrl('/winner')
    console.log(this.currentPlayerChoice);
    this.createComputerChoice();
    console.log(this.computerChoice);
    this.winner();
  }

  winner() {
    if ((this.currentPlayerChoice === 'rock' && this.computerChoice === 'scissors') ||
      (this.currentPlayerChoice === 'paper' && this.computerChoice === 'rock') ||
      (this.currentPlayerChoice === 'scissors' && this.computerChoice === 'paper')) {
      // this.winningPlayer = 'player'
      console.log('Player wins!');
    } else if
      (this.computerChoice === this.currentPlayerChoice) {
      // this.winningPlayer = 'Draw'
      console.log('Tie!');
    } else {
      console.log('Computer wins!');
      // this.winningPlayer = 'computer'
    }
  }

}
