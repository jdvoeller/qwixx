import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoxData } from 'src/app/services/game-state.service';

@Component({
	selector: 'card-score-box',
	templateUrl: 'card-score-box.component.html',
	styleUrls: ['./card-score-box.component.scss'],
})

export class CardScoreBoxComponent {
	@Input() data!: BoxData;
	@Input() color: string = 'grey';
	@Output() boxUpdated = new EventEmitter<BoxData>();

	public buttonSelected = false;
	constructor() { }

	public toggleState() {
		if (!this.data.disabled) {
			this.buttonSelected = !this.buttonSelected;
			const updatedData: BoxData = {
				boxName: this.data.boxName,
				selected: this.buttonSelected,
				disabled: this.data.disabled,
			}
			this.boxUpdated.emit(updatedData)
		}
	}
}