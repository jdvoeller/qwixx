import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BOTTOM_SCORES, TOP_SCORES } from 'src/app/services/game-state.service';
import { BoxUpdateData } from './card-score-box/card-score-box.component';

export interface BoxData {
	key: string,
	backgroundColor: string,
	boxColor: string,
	scoreBoxData: any[],
}

export interface BoxUpdateDataEx extends BoxUpdateData {
	colorKey: string,
}

@Component({
	selector: 'row-card',
	templateUrl: 'row-card.component.html',
	styleUrls: ['./row-card.component.scss'],
})

export class RowCardComponent {
	@Input() color!: string;
	@Output() updateGameState = new EventEmitter<BoxUpdateDataEx>();

	public colorDataMapping: BoxData[] = [
		{
			key: 'red',
			backgroundColor: '#f03c3c',
			boxColor: '#f5bcbc',
			scoreBoxData: TOP_SCORES,
		},
		{
			key: 'yellow',
			backgroundColor: '#f5e320',
			boxColor: '#f5f0b8',
			scoreBoxData: TOP_SCORES,
		},
		{
			key: 'green',
			backgroundColor: '#0b4d0b',
			boxColor: '#91b891',
			scoreBoxData: BOTTOM_SCORES,
		},
		{
			key: 'blue',
			backgroundColor: '#1111a6',
			boxColor: '#a1a1f0',
			scoreBoxData: BOTTOM_SCORES,
		},
	]

	constructor() { }

	public get colorData(): BoxData {
		return this.colorDataMapping.filter((color) => color.key === this.color)[0];
	}

	public boxUpdated(data: BoxUpdateData) {
		this.updateGameState.emit({...data, colorKey: this.color});
	}
}