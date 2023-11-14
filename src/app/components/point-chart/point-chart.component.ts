import { Component, OnInit } from '@angular/core';

interface PointBoxData {
	top: string;
	bottom: string;
}

@Component({
	selector: 'point-chart',
	templateUrl: 'point-chart.component.html',
	styleUrls: ['./point-chart.component.scss'],
})

export class PointChartComponent implements OnInit {
	public pointBoxes: PointBoxData[];
	constructor() {
		this.pointBoxes = [
			{
				top: '1x',
				bottom: '1',
			},
			{
				top: '2x',
				bottom: '3',
			},
			{
				top: '3x',
				bottom: '6',
			},
			{
				top: '4x',
				bottom: '10',
			},
			{
				top: '5x',
				bottom: '16',
			},
			{
				top: '6x',
				bottom: '21',
			},
			{
				top: '7x',
				bottom: '28',
			},
			{
				top: '8x',
				bottom: '36',
			},
			{
				top: '9x',
				bottom: '45',
			},
			{
				top: '10x',
				bottom: '55',
			},
			{
				top: '11x',
				bottom: '66',
			},
			{
				top: '12x',
				bottom: '78',
			},
		];
	}

	ngOnInit() { }
}