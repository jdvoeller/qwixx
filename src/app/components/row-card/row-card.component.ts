import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoxData, RowData, UpdatedBoxData } from 'src/app/services/game-state.service';

@Component({
	selector: 'row-card',
	templateUrl: 'row-card.component.html',
	styleUrls: ['./row-card.component.scss'],
})

export class RowCardComponent {
	@Input() rowData!: RowData;
	@Output() updateGameState = new EventEmitter<UpdatedBoxData>();

	public boxUpdated(data: BoxData) {
		this.updateGameState.emit({...data, colorKey: this.rowData.color});
	}
}