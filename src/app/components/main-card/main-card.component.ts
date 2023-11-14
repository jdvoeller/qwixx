import { Component } from '@angular/core';
import { GameStateService } from 'src/app/services/game-state.service';
import { BoxUpdateDataEx } from '../row-card/row-card.component';

@Component({
	selector: 'main-card',
	templateUrl: 'main-card.component.html',
	styleUrls: ['./main-card.component.scss'],

})
export class MainCardComponent {
	public rowColorKeys: string[] = [ 'red', 'yellow', 'green', 'blue' ];
	public score: number = 0;
	constructor(private gameStateService: GameStateService) {
	}

	public updateGameState(data: BoxUpdateDataEx) {
		console.log(this.gameStateService.updateState(data));
	}
}