import { getLocaleMonthNames } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/game.service';
import { WinnerPresenterService } from '../winner-presenter/winner-presenter.service';

@Component({
  selector: 'app-winner-presentation',
  templateUrl: './winner-presentation.component.html',
  viewProviders: [WinnerPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
  // styleUrls: ['./winner-presentation.component.scss']
})
export class WinnerPresentationComponent implements OnInit {

  public playerChoice: String;
  public computerChoice: String;
  public winningPlayer?: String;

  constructor(private service: WinnerPresenterService, private gameservice: GameService, private router: Router) {

    this.playerChoice = '';
    this.computerChoice = '';
    // this.winningPlayer = '';
  }
  ngOnInit(): void {
    this.gameservice.playerChoice$.subscribe((res: string) => {
      this.playerChoice = res;
      // console.log(this.playerChoice);
    })
    this.gameservice.computerChoice$.subscribe((res: string) => {
      this.computerChoice = res;
      // console.log(this.computerChoice);
    });
    this.winningPlayerr();
    this.winner();
  }
  winningPlayerr() {
    this.gameservice.winnerPlayer$.subscribe((res: any) => {
      this.winningPlayer = res;
    })
  }

  winner() {
    this.service.winner(this.playerChoice, this.computerChoice);
  }

  playAgain() {
    this.router.navigateByUrl('/rps');
  }
}
