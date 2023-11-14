import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { PointChartComponent } from './components/point-chart/point-chart.component';
import { CardScoreBoxComponent } from './components/row-card/card-score-box/card-score-box.component';
import { RowCardComponent } from './components/row-card/row-card.component';
import { MinusBoxesComponent } from './components/score/minus-boxes/minus-boxes.component';
import { ScoreComponent } from './components/score/score.component';
import { GameStateService } from './services/game-state.service';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    RowCardComponent,
    CardScoreBoxComponent,
    PointChartComponent,
    ScoreComponent,
    MinusBoxesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
