import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { RouteReusableStrategy } from './route-reusable-strategy';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { I18nService } from './i18n.service';
import { HttpService } from './http/http.service';
import { HttpCacheService } from './http/http-cache.service';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/error-handler.interceptor';
import { CacheInterceptor } from './http/cache.interceptor';

@NgModule({
	imports: [CommonModule, HttpClientModule, RouterModule, TranslateModule],
	providers: [
		AuthenticationGuard,
		AuthenticationService,
		I18nService,
		HttpCacheService,
		ApiPrefixInterceptor,
		ErrorHandlerInterceptor,
		CacheInterceptor,
		{
			provide: HttpClient,
			useClass: HttpService,
		},
		{
			provide: RouteReuseStrategy,
			useClass: RouteReusableStrategy,
		},
	],
})
export class CoreModule {
	constructor(
		@Optional()
		@SkipSelf()
		parentModule: CoreModule
	) {
		if (parentModule) {
			throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
		}
	}
}
