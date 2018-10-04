import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	template: `
	<div class="container-fluid">
		Hello!
	</div>
	`,
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
