import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shell',
	template: `
		<app-header></app-header>
		<router-outlet></router-outlet>
	`,
})
export class ShellComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
