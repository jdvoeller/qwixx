import { Injectable } from '@angular/core';
import { BoxUpdateDataEx } from '../components/row-card/row-card.component';

export interface GameState {
	totalScore: number,
	rowsData: RowData[],
}

interface RowData {
	color: string,
	boxes: BoxData[],
	rowScore: number,
}

interface BoxData {
	boxName: number | string,
	selected: boolean;
}

export const TOP_SCORES: (number | string)[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'lock'];
export const BOTTOM_SCORES: (number | string)[] = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 'lock'];

@Injectable({providedIn: 'root'})
export class GameStateService {
	public STATE: GameState;
	constructor() {
		this.STATE = {
			totalScore: 0,
			rowsData: [
				{
					color: 'red',
					boxes: [],
					rowScore: 0
				},
				{
					color: 'yellow',
					boxes: [],
					rowScore: 0
	
				},
				{
					color: 'green',
					boxes: [],
					rowScore: 0
	
				},
				{
					color: 'blue',
					boxes: [],
					rowScore: 0
	
				},
			],
		}

		this.populateNewGame();
	}
	
	populateNewGame() {
		this.STATE.rowsData.map((row) => {
			let updatedRow = {...row};
			if (row.color === 'red' || row.color === 'yellow') {
				TOP_SCORES.forEach((val) => {
					updatedRow.boxes.push({
						boxName: val,
						selected: false,
					});
				});
			} else {
				BOTTOM_SCORES.forEach((val) => {
					updatedRow.boxes.push({
						boxName: val,
						selected: false,
					});
				});
			}
			return updatedRow;
		});
	}

	updateState(data: BoxUpdateDataEx): GameState {
		this.STATE.rowsData.forEach((row) => {
			if (row.color === data.colorKey) {
				row.boxes.forEach((box) => {
					if (box.boxName === data.number) {
						box.selected = data.selected;
					}
				})
			}
		});

		return this.STATE;
	}

	getRowScore(row: string): number {
		return 0;
	}
}