import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RpsPresenterService } from '../rps-presenter/rps-presenter.service';

@Component({
  selector: 'app-rps-presentation',
  templateUrl: './rps-presentation.component.html',
  viewProviders: [RpsPresenterService]
  // styleUrls: ['./rps-presentation.component.scss']
})
export class RpsPresentationComponent {
  isSelected: boolean;
  choices: any;

  constructor(private router: Router, private rpspresenterService: RpsPresenterService) {
    this.isSelected = false;
    // this.choices = rpspresenterService.choices;
  }



  playerChoice(choice: string) {
    this.isSelected = false;
    this.router.navigateByUrl('/winner')
    this.rpspresenterService.playerChoiceee(choice)
  }



}
