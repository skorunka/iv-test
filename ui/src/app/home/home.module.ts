import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from '@app/home/home-routing.module';
import { HomeComponent } from '@app/home/home.component';

@NgModule({
	imports: [SharedModule, HomeRoutingModule],
	declarations: [HomeComponent],
})
export class HomeModule {}
