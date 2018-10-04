import { environment } from '@env/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from '@app/store/reducers';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared/shared.module';
import { ShellModule } from '@app/shell/shell.module';
import { LoginModule } from '@app/login/login.module';
import { HomeModule } from '@app/home/home.module';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

const STORE_MODULES: any[] = [
	StoreModule.forRoot(reducers, { metaReducers }),
	EffectsModule.forRoot([]),
	!environment.production ? StoreDevtoolsModule.instrument() : [],
];

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		TranslateModule.forRoot(),
		ToastrModule.forRoot({ timeOut: 2000 }),
		STORE_MODULES,
		CoreModule,
		SharedModule,
		ShellModule,
		LoginModule,
		HomeModule,
		AppRoutingModule, // must be last module
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
