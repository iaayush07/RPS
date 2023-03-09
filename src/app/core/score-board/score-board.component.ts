import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  // styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  public score: number;
  public winner!: string;

  constructor(private gameService: GameService) {
    this.score = 0;
  }

  ngOnInit(): void {
    this.gameService.winnerPlayer$.subscribe((res: any) => {
      this.winner = res;

      this.scoreBoard();
    });
  }
  scoreBoard() {
    if (this.winner == 'draw') {
      this.score = this.score;
    }
    if (this.winner == 'player') {
      this.score += 1;
    }
    if (this.winner == 'computer') {
      this.score -= 1;
    }


  }
}
