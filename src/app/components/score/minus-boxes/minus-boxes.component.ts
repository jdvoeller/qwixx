import { Component, OnInit } from '@angular/core';

interface MinusData {
	boxNum: number,
	selected: boolean,
}
@Component({
	selector: 'minus-boxes',
	templateUrl: 'minus-boxes.component.html',
	styleUrls: ['./minus-boxes.component.scss']
})

export class MinusBoxesComponent implements OnInit {
	public boxes: MinusData[];
	constructor() {
		this.boxes = [
			{
				boxNum: 1,
				selected: false,
			},
			{
				boxNum: 2,
				selected: false,
			},
			{
				boxNum: 3,
				selected: false,
			},
			{
				boxNum: 4,
				selected: false,
			},
		]
	}

	ngOnInit() { }
}