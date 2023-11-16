import { Component, Input, OnInit } from '@angular/core';
import { MinusData } from './minus-boxes/minus-boxes.component';

@Component({
	selector: 'score',
	templateUrl: 'score.component.html',
	styleUrls: ['./score.component.scss']
})

export class ScoreComponent implements OnInit {
	@Input() score!: number;

	public minusPoints: number = 0;
	constructor() { }

	ngOnInit() { }

	minuBoxClicked(boxes: MinusData[]) {
		let total = 0;
		boxes.forEach((box) => {
			if (box.selected) {
				total -= 5;
			}
		});
		this.minusPoints = total;
	}
}