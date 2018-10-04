import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { BootstrapModule } from '@app/bootstrap';

import { LoaderComponent } from './loader/loader.component';

const SHARED_MODULES = [CommonModule, TranslateModule, ToastrModule, BootstrapModule];
const SHARED_COMPONENTS = [LoaderComponent];

@NgModule({
	imports: [SHARED_MODULES],
	declarations: [SHARED_COMPONENTS],
	exports: [SHARED_MODULES, SHARED_COMPONENTS],
})
export class SharedModule {}
