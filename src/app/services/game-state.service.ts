import { Injectable } from '@angular/core';

export interface GameState {
	totalScore: number,
	rowsData: RowData[],
}

export interface RowData {
	color: string,
	boxes: BoxData[],
	rowScore: number,
	rowColorData: RowColorData,
	lockable: boolean,
}

export interface BoxData {
	boxName: (number | 'lock'),
	selected: boolean,
	disabled: boolean,
}

export interface UpdatedBoxData extends BoxData{
	colorKey: string,
}

export interface RowColorData {
	backgroundColor: string,
	boxColor: string,
}

export const TOP_SCORES: (number | 'lock')[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'lock'];
export const BOTTOM_SCORES: (number | 'lock')[] = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 'lock'];

@Injectable({providedIn: 'root'})
export class GameStateService {
	public STATE!: GameState;
	constructor() {
		this.setGameStartState();
		this.populateNewGame();
	}

	public updateState(data: UpdatedBoxData): GameState {

		// Update row select state
		this.STATE.rowsData.forEach((row) => {
			if (row.color === data.colorKey) {
				row.boxes.forEach((box) => {
					if (box.boxName === data.boxName) {
						box.selected = data.selected;
					}
				})
			}
		});

		// Get row total score
		this.STATE.rowsData.forEach((row) => {
			row.rowScore = this.getRowScore(row.color);
		})

		// Set total score
		this.STATE.totalScore = this.totalScore;

		// See if row is lockable
		this.STATE.rowsData.forEach((row) => {
			if (row.boxes.filter((row) => row.selected).length >= 5) {
				row.lockable = true;
			} else {
				row.lockable = false;
			}
		})

		// Disable rows
		this.setDisabledState();
		return this.STATE;
	}

	private setGameStartState() {
		this.STATE = {
			totalScore: 0,
			rowsData: [
				{
					color: 'red',
					boxes: [],
					rowScore: 0,
					rowColorData: {
						backgroundColor: '#f03c3c',
						boxColor: '#f5bcbc',
					},
					lockable: false,
				},
				{
					color: 'yellow',
					boxes: [],
					rowScore: 0,
					rowColorData: {
						backgroundColor: '#f5e320',
						boxColor: '#f5f0b8',
					},
					lockable: false,	
				},
				{
					color: 'green',
					boxes: [],
					rowScore: 0,
					rowColorData: {
						backgroundColor: '#0b4d0b',
						boxColor: '#91b891',
					},
					lockable: false,
				},
				{
					color: 'blue',
					boxes: [],
					rowScore: 0,
					rowColorData: {
						backgroundColor: '#1111a6',
						boxColor: '#a1a1f0',
					},
					lockable: false,	
				},
			],
		}
	}
	
	private populateNewGame() {
		this.STATE.rowsData.map((row) => {
			let updatedRow = {...row};
			if (row.color === 'red' || row.color === 'yellow') {
				TOP_SCORES.forEach((val) => {
					updatedRow.boxes.push({
						boxName: val,
						selected: false,
						disabled: false,
					});
				});
			} else {
				BOTTOM_SCORES.forEach((val) => {
					updatedRow.boxes.push({
						boxName: val,
						selected: false,
						disabled: false,

					});
				});
			}
			return updatedRow;
		});

		this.setDisabledState();
	}

	private setDisabledState() {
		this.STATE.rowsData.forEach((row) => {
			let mostRightNumberIndex = 0;
			row.boxes.forEach((box, i) => {
				if (box.selected) {
					mostRightNumberIndex = i;
				}
			});

			row.boxes.forEach((box, i) => {
				if (i < mostRightNumberIndex) {
					row.boxes[i].disabled = true;
				} else {
					row.boxes[i].disabled = false;
				}

				if (!row.lockable) {
					row.boxes[row.boxes.length - 1].disabled = true;
					row.boxes[row.boxes.length - 2].disabled = true;
				} else {
					row.boxes[row.boxes.length - 1].disabled = false;
					row.boxes[row.boxes.length - 2].disabled = false;
				}

			})
		});
	}

	private get totalScore(): number {
		let total = 0;
		this.STATE.rowsData.forEach((row) => {
			total += row.rowScore;
		});
		return total;
	}

	private getRowScore(rowColor: string): number {
		let row = this.STATE.rowsData.filter((r) => r.color === rowColor)[0];
		let boxesSelected = 0;
		row.boxes.forEach((box) => {
			if (box.selected) {
				boxesSelected++;
			}
		});

		switch (boxesSelected) {
			case 1:
				return 1;
			case 2:
				return 3;
			case 3:
				return 6;
			case 4:
				return 10;
			case 5:
				return 16;
			case 6:
				return 21;
			case 7:
				return 28;
			case 8:
				return 36;
			case 9:
				return 45;
			case 10:
				return 55;
			case 11:
				return 66;
			case 12:
				return 78;
			default: 
				return 0;
		}
	}
}