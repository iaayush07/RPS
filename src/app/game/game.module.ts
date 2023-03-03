import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { RpsContainerComponent } from './rps-container/rps-container.component';
import { WinnerContainerComponent } from './winner-container/winner-container.component';
import { RpsPresentationComponent } from './rps-container/rps-presentation/rps-presentation.component';
import { WinnerPresentationComponent } from './winner-container/winner-presentation/winner-presentation.component';


@NgModule({
  declarations: [
    GameComponent,
    RpsContainerComponent,
    WinnerContainerComponent,
    RpsPresentationComponent,
    WinnerPresentationComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
