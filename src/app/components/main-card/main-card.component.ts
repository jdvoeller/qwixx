import { Component } from '@angular/core';
import { GameState, GameStateService, UpdatedBoxData } from 'src/app/services/game-state.service';

@Component({
	selector: 'main-card',
	templateUrl: 'main-card.component.html',
	styleUrls: ['./main-card.component.scss'],

})
export class MainCardComponent {
	public score: number = 0;
	public state: GameState;
	constructor(private gameStateService: GameStateService) {
		this.state = this.gameStateService.STATE;
	}

	public updateGameState(data: UpdatedBoxData) {
		this.gameStateService.updateState(data);
		this.score = this.gameStateService.STATE.totalScore;
		this.state = {...this.gameStateService.STATE};
		this.state.rowsData.map((row) => {
			return {...row}
		})
	}
}