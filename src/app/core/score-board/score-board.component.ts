import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  // styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnChanges {
  public score: number;

  constructor(private gameService: GameService) {
    this.score = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
