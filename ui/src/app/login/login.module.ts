import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
	imports: [SharedModule, ReactiveFormsModule, LoginRoutingModule],
	declarations: [LoginComponent],
})
export class LoginModule {}
