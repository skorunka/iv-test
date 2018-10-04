import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
	Shell.childRoutes([
		{ path: 'home', component: HomeComponent, data: { title: extract('Home') } },
		{ path: '', redirectTo: 'home', pathMatch: 'full' },
	]),
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [],
})
export class HomeRoutingModule {}
