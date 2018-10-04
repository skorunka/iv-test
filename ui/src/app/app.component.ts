import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';

const log = new Logger('App');

@Component({
	selector: 'app-root',
	template: `
		<router-outlet></router-outlet>
	`,
})
export class AppComponent implements OnInit {
	constructor(
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute,
		private readonly titleService: Title,
		private readonly translateService: TranslateService,
		private readonly i18nService: I18nService
	) {}

	ngOnInit() {
		if (environment.production) {
			Logger.enableProductionMode();
		}

		log.debug('init');

		// Setup translations
		this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

		const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

		// Change page title on navigation or language change, based on route data
		merge(this.translateService.onLangChange, onNavigationEnd)
			.pipe(
				map(() => {
					let route = this.activatedRoute;
					while (route.firstChild) {
						route = route.firstChild;
					}
					return route;
				}),
				filter(route => route.outlet === 'primary'),
				mergeMap(route => route.data)
			)
			.subscribe(event => {
				const title = event['title'];
				if (title) {
					this.titleService.setTitle(this.translateService.instant(title));
				}
			});
	}
}
