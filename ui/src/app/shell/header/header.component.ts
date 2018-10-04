import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthenticationService, I18nService } from '@app/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
	menuHidden = true;

	private actionsSubscription: Subscription;

	constructor(
		private readonly router: Router,
		private readonly authenticationService: AuthenticationService,
		private readonly i18nService: I18nService
	) {}

	ngOnInit() {}

	ngOnDestroy() {
		if (this.actionsSubscription) this.actionsSubscription.unsubscribe();
	}

	toggleMenu() {
		this.menuHidden = !this.menuHidden;
	}

	setLanguage(language: string) {
		this.i18nService.language = language;
	}

	logout() {
		this.actionsSubscription = this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
	}

	get currentLanguage(): string {
		return this.i18nService.language;
	}

	get languages(): string[] {
		return this.i18nService.supportedLanguages;
	}

	get username(): string | null {
		const credentials = this.authenticationService.credentials;
		return credentials ? credentials.username : null;
	}
}
