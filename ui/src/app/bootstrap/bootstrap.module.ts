import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbButtonsModule, NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

const MODULES = [NgbAlertModule, NgbButtonsModule, NgbCollapseModule, NgbDropdownModule];

@NgModule({
	imports: MODULES,
	exports: MODULES,
})
export class BootstrapModule {}
