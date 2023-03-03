import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ScoreBoardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
