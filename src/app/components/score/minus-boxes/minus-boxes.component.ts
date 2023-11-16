import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface MinusData {
	boxNum: number,
	selected: boolean,
}
@Component({
	selector: 'minus-boxes',
	templateUrl: 'minus-boxes.component.html',
	styleUrls: ['./minus-boxes.component.scss']
})

export class MinusBoxesComponent implements OnInit {
	@Output() boxClickedEvent: EventEmitter<MinusData[]> = new EventEmitter();
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

	boxClicked(boxNum: number) {
		const BOX = this.boxes.filter((b) => b.boxNum === boxNum)[0];
		BOX.selected = !BOX.selected;
		this.boxClickedEvent.emit(this.boxes);
	}

	ngOnInit() { }
}