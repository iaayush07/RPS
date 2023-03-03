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
  ],
  exports: [
    ScoreBoardComponent,
    FooterComponent
  ]
})
export class CoreModule { }
