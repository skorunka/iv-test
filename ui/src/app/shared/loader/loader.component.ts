import { Component, OnInit, Input } from '@angular/core';
import { I18nService } from '@app/core';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
	@Input()
	isLoading = true;

	@Input()
	message?: string;

	constructor(i18nService: I18nService) {
		i18nService.translate('Loading...').subscribe(x => (this.message = this.message ? this.message : x));
	}

	ngOnInit() {}
}
