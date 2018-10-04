import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	imports: [SharedModule, RouterModule],
	declarations: [ShellComponent, HeaderComponent],
})
export class ShellModule {}
