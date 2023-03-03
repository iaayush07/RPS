import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { RpsContainerComponent } from './rps-container/rps-container.component';
import { WinnerContainerComponent } from './winner-container/winner-container.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'rps'
      },
      {
        path: 'rps',
        component: RpsContainerComponent
      },
      {
        path: 'winner',
        component: WinnerContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
