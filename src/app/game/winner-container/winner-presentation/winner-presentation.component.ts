import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-winner-presentation',
  templateUrl: './winner-presentation.component.html',
  // styleUrls: ['./winner-presentation.component.scss']
})
export class WinnerPresentationComponent implements OnInit {

  constructor(private gameservice: GameService) {

  }

  ngOnInit(): void {
    this.gameservice.playerChoice$.subscribe(res => {
      console.log(res);
    })
  }
}
