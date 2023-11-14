import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface BoxUpdateData {
	number: number | 'lock';
	selected: boolean;
}
@Component({
	selector: 'card-score-box',
	templateUrl: 'card-score-box.component.html',
	styleUrls: ['./card-score-box.component.scss'],
})

export class CardScoreBoxComponent implements OnInit {
	@Input() data!: number | 'lock';
	@Input() color: string = 'white';
	@Input() disabledBox = false;
	@Output() boxUpdated = new EventEmitter<BoxUpdateData>();

	public buttonSelected = false;
	constructor() { }

	public toggleState() {
		this.buttonSelected = !this.buttonSelected;
		const updatedData: BoxUpdateData = {
			number: this.data,
			selected: this.buttonSelected
		}
		this.boxUpdated.emit(updatedData)
	}

	ngOnInit() { }
}