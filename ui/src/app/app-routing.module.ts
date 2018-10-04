import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
	Shell.childRoutes([{ path: 'about', loadChildren: 'app/about/about.module#AboutModule' }]),
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
